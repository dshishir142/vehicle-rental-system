import React from 'react'
import Styles from "./Searchbox.module.css"

const Searchbox = () => {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.Searchbox}>
          <label htmlFor="Searchbox">Pickup location</label>
          <input id="Searchbox" type="text" />
        </div>


        <div className={Styles.vechileslist}>
          <label for="vechiles">Choose a car:</label>

          <select className={Styles.vechileslist} id="vechiles" name="cars">
            <option value="car">car</option>
            <option value="motercycle">motercycle</option>
            <option value="Jeep">Jeep</option>
            <option value="Scooter">Scooter</option>
          </select>
        </div>
        <div className={Styles.pickup_date}>
          <label htmlFor="Pickup date">Pickup date</label>
          <input id="Pickup date" type="date" placeholder='pick up date' />

        </div>
        <div className={Styles.time}>
          <label htmlFor="time">time</label>
          <input id="time" type="time" placeholder='time' />

        </div>
        <div className={Styles.dropoff_date}>
          <label htmlFor="drop of date">drop of date</label>
          <input id="drop of date" type="date" placeholder='pick up date' />

        </div>

        <div className="buttondiv">
          <button>Search</button>
        </div>

      </div>



    </>
  )
}

export default Searchbox
