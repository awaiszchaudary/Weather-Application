import React from 'react';
import './style1.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Weatherreport = ({temp , humidity , pressure , city}) => {

    return (
        <div className = 'py-5'>
            <div className = 'container my-5' id = 'reportcard'>
                <div className = 'row py-3'>
                    <div className = 'col-12'>
                        <div>
                            <p id = 'data'>Temperature : {temp} *C</p>
                        </div>
                    </div>
                </div>
                <div className = 'row py-3'>
                    <div className = 'col-12'>
                        <div>
                            <p id = 'data'>Pressure : {pressure}</p>
                        </div>
                    </div>
                </div>
                <div className = 'row py-3'>
                    <div className = 'col-12'>
                        <div>
                            <p id = 'data'>Humidity : {humidity}</p>
                        </div>
                    </div>
                </div>
                <div className = 'row py-3'>
                    <div className = 'col-12'>
                        <div>
                            <p id = 'data'>City : {city}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weatherreport;