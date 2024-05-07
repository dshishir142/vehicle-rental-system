import React, { useState } from 'react'
import Styles from "../sendingVechileDataToDb/sendingVechileDataToDb.module.css"
import axios from 'axios';


const sendingVechileDataToDb = () => {
    const [formValue,setFormValue]=useState({vehicleType:"",vehicleName:"",pricePerDay:"",district:""});
    const formsubmit=(e)=>{
        e.preventDefault();
        const { vehicleType, vehicleName, pricePerDay, district } = formValue;
        axios.post("http://Localhost:8000/api/data",{vehicleType,vehicleName,pricePerDay,district})
        .then((response)=>{
            console.log(response)

        }).catch((error)=>{
            console.log(error);
        })
        


    }
    const handleInput=(event)=>{
    const {name,value}=event.target;
    setFormValue({...setFormValue,[name]:value})
    console.log(formValue)
    }
   
    return (
        <>
            <div className={Styles.container}>
                <div className={Styles.header}>Upload vechile for rent</div>
                <form onSubmit={formsubmit}>
                    <div class="form-item">
                        <label for="vehicleType">Vehicle Type:</label>
                        <select id="vehicleType" name="vehicleType" onChange={handleInput}>
                            <option value="Sedan">Sedan</option>
                            <option value="SUV">SUV</option>
                            <option value="Convertible">Convertible</option>
                            <option value="Van">Van</option>
                            <option value="Truck">Truck</option>
                        </select>
                    </div>
                    <div class="form-item">
                        <label for="vehicleName">Name of Vehicle:</label>
                        <input type="text" id="vehicleName" name="vehicleName" onChange={handleInput}/>
                    </div>
                    <div class="form-item">
                        <label for="pricePerDay">Price Per Day ($):</label>
                        <input type="number" id="pricePerDay" name="pricePerDay" onChange={handleInput}/>
                    </div>
                    <div class="form-item">
                        <label for="district">District Location:</label>
                        <input type="text" id="district" name="district" onChange={handleInput}/>
                    </div>
                    <button type="submit">Submit Rental</button>

                </form>







            </div>
        </>
    )
}

export default sendingVechileDataToDb
