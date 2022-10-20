import React , {useState} from 'react';
import Weatherapi from './Weatherapi';
import Weatherreport from './Weatherreport';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style1.css';

const App = () => {

    const [text , setText] = useState('');
    const [temp , setTemp] = useState('');
    const [humidity , setHumidity] = useState('');
    const [pressure , setPressure] = useState('');
    const [city , setCity] = useState('');
    


    const onFormSubmit = async (event) => {
        event.preventDefault();
        
        const response = await Weatherapi.get("/weather" , {
            params : {
                q : text ,
                appid : '79e5f0f7a85d9dbeb8e8a39f729da27d', 
                units : 'metric'
            }
        })

        
        console.log(response);
        setTemp(response.data.main.temp);
        setHumidity(response.data.main.humidity);
        setPressure(response.data.main.pressure);
        setText('');
        setCity(response.data.name);
        

        
    }

    

    const onTextChange = (event) => {
        setText(event.target.value);
    }

    const report = () => {
        if(temp !== ''){
            return <Weatherreport temp = {temp} humidity = {humidity} pressure = {pressure} city = {city} />
    
        }
    }

    return(
        <div id = 'head'>
            <div className = 'container py-5'>
                <div  id = 'heading' className = 'my-5'>
                    <h1>Weather Application</h1>
                </div>
                <form className = 'mb-3 my-5' onSubmit = {onFormSubmit}>
                    <label id = 'label'><b>Enter City</b></label><br/>
                    <input type = 'text' value = {text} className = 'form-control' onChange = {onTextChange}></input>
                    {report()}
                </form>
            </div>
        </div>
    )
}

export default App;