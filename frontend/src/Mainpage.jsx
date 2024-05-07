import React from 'react'
import Nav from './home_page/navbar/nav.jsx'
import Loginpage from './LoginPage/Loginpage.jsx'
import Searchbox from './home_page/SearchBox/Searchbox.jsx'
import Carpage from './Carpage/Carpage.jsx'
import Etikai from './etikai.jsx'
import Displaying_vechile_API_data from "./Displaying_vechile_API_data/Displaying_vechile_API_data.jsx"
import SendingVechileDataToDb from '../sendingVechileDataToDb/sendingVechileDataToDb.jsx'

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
