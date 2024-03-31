import React from 'react';
import Stylenav from "./nav.module.css";

const nav = () => {
  return (
    <>
    <div> 
    <nav className={Stylenav.nav}>
        <img src="" alt="LOGO" />
        <div className={Stylenav.nav_grpup_name}>
        <p >Vroom by G5</p>
        

        </div>

      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Our Services</a></li>
        <li><a href="">Contacts</a></li>
      </ul>
    </nav>
    </div>

   
    </>
  );
};

export default nav;
