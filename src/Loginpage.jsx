import React, { useState } from 'react'

import Styles from "../LoginPage/Loginpage.module.css"
import User_icon from "../assets/Login_signup/email.png"
import Password_icon from "../assets/Login_signup/password.png"
import Email_icon from "../assets/Login_signup/person.png"
const Loginpage = () => {


  const [action,setaction]=useState("login");

  return (
   <>
   <div className={Styles.container}>
    <div className={Styles.header}>
      <div className={Styles.text}>{action}</div>
        <div className={Styles.underline}>
      </div>
    </div>
      <div className='inputs'>
        {action==="login"?<></>: <div className={Styles.input}>
        <img src={User_icon} alt="" />
        <input type="text" placeholder='Name'/>
      </div>}
      

     
      <div className={Styles.input}>
        <img src={Email_icon} alt="" />
        <input type="email" placeholder='Email-id' />
      </div>
      <div className={Styles.input}>
        <img src={Password_icon} alt="" />
        <input type="password" placeholder='Password' />
      </div>   
      </div>

      
       </div>
       {action==="Sign up"?<></>:   <div className={Styles.forgot_password}>forgot Password?? <span >click here</span></div>
}
      

   <div className={Styles.Submit_container}>
   <div className={`${Styles.Submit} ${action === "Sign up" ? Styles.gray : ''}`} onClick={()=>{setaction("login")}}>login</div>
   <div className={`${Styles.Submit} ${action === "login" ? Styles.gray : ''}`} onClick={()=>{ setaction("Sign up")}}>sign up</div>

   </div>
   

   
   </>
  )
}

export default Loginpage
