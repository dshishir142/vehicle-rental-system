import React from 'react'
import Nav from '../../home_page/navbar/nav'
import StyleCarpage from"./Carpage.module.css"

const Carpage = () => {
  return (
   <>
   <Nav>
   </Nav>
   <div className={StyleCarpage.containerForMap}>
    <h1>map</h1>

   </div>
    <div className={StyleCarpage.Diferent_cars}>

   <ul>
        <li><a href="">small car</a></li>
        <li><a href="">medium cars</a></li>
        <li><a href="">largecar</a></li>
        <li><a href="">SUVs</a></li>
        <li><a href="">Luxury cars</a></li>
      </ul>
    </div>
   
   
   
   
   
   
   </>  
   )
}

export default Carpage
