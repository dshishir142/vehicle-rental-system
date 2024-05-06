import React from 'react'
import Nav from './components/navbar/nav.jsx'
import Loginpage from './components/LoginPage/Loginpage.jsx'
import Searchbox from './components/SearchBox/Searchbox.jsx'
import SendingVechileDataToDb from './components/SendingVechileDatatoDB/SendingDataVechileToDB.jsx'
import Displaying_vechile_API_data from "./components/Displaying_vechile_API_data/Displaying_vechile_API_data.jsx"
import './Mainpage.css'

const Mainpage = () => {
  return (
    <>
    <div className='nav bar'>
    <Nav></Nav>
    </div>
    <div className="container">
      <div className="searchBox">
      <SendingVechileDataToDb></SendingVechileDataToDb>
      <Displaying_vechile_API_data></Displaying_vechile_API_data>

      </div>


    </div>
    
        
      
    </>
  )
}

export default Mainpage
