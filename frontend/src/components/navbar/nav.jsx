import React, { useState } from 'react';
import Stylenav from "./nav.module.css";
import Loginpage from '../LoginPage/Loginpage.jsx';

const Nav = () => {
  const [loginclicked, setLoginclicked] = useState(false);

  const ok = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setLoginclicked(!loginclicked);
  }

  return (
    <>
      <div>
        <nav className={Stylenav.nav}>
          <img src="" alt="LOGO" />
          <div className={Stylenav.nav_grpup_name}>
            <p>Vroom by G5</p>
          </div>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/contacts">Contacts</a></li>
            <li><a href="#" onClick={ok}>Login</a></li>
          </ul>
        </nav>
      </div>

      {loginclicked && <Loginpage />}
    </>
  );
};

export default Nav;
