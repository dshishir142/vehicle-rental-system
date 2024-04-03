import { useState } from 'react'

import Displaying_vechile_API_data from "./Displaying_vechile_API_data/Displaying_vechile_API_data.jsx"

import Nav from './home_page/navbar/nav.jsx'
import Loginpage from './LoginPage/Loginpage.jsx'
import Searchbox from './home_page/SearchBox/Searchbox.jsx'
import Carpage from './Carpage/Carpage.jsx'
import Etikai from './etikai.jsx'
function App() {

  return (
    
     <>
     {/* <Displaying_vechile_API_data>
      
     </Displaying_vechile_API_data> */}

     { <Loginpage>

     </Loginpage> }
     {/* <Carpage>

      
     </Carpage> */}
    
     {/* <Nav></Nav>
     <Searchbox></Searchbox> */}
     
     </>
  )
}

export default App
