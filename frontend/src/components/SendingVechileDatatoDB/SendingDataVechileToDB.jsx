import React, { useState } from 'react'
import Styles from "./SendingVechileDataToDB.module.css"
import axios from 'axios';


const sendingVechileDataToDb = () => {
    const [formValue,setFormValue]=useState({vehicleType:"",model:"",price:"",location:""});
    const formsubmit=(e)=>{
        e.preventDefault();
        const { vehicleType, company, model, price } = formValue;
        axios.post("http://Localhost:8000/api/car",{vehicleType,model,price,location})
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
                        <label for="model">Model:</label>
                        <input type="text" id="model" name="model" onChange={handleInput}/>
                    </div>
                    <div class="form-item">
                        <label for="model">Price Per Day ($):</label>
                        <input type="number" id="price" name="price" onChange={handleInput}/>
                    </div>
                    <div class="form-item">
                        <label for="price"> Location:</label>
                        <input type="text" id="location" name="location" onChange={handleInput}/>
                    </div>
                    <button type="submit">Submit Rental</button>

                </form>







            </div>
        </>
    )
}

export default sendingVechileDataToDb