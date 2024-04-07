import React, { useState } from 'react';
import axios from "axios";
import Styles from "../LoginPage/Loginpage.module.css";
import User_icon from "../assets/Login_signup/email.png";
import Password_icon from "../assets/Login_signup/password.png";
import Email_icon from "../assets/Login_signup/person.png";

const Loginpage = () => {
  const [action, setAction] = useState("login");
  const [formValue, setFormValue] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (action === "login") {
      // Handle login
      console.log("Logging in with", formValue);
    } else {
      // Handle signup
      console.log("Signing up with", formValue);
    }
    const Name_for_posting_data_on_api=e.target.name.value
    const Email_for_posting_data_on_api=e.target.email.value;
    const password_for_posting_data_on_api=e.target.password.value;
    axios.post("http://Localhost:8000/api/data",{Name_for_posting_data_on_api,
    Email_for_posting_data_on_api,
    password_for_posting_data_on_api,
  }).then((response)=>{
    console.log(response);

  }).catch((error)=>{
    console.log("gay booi error");
    console.log(error);


  })
    ;

  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.header}>
          <div className={Styles.text}>{action.toUpperCase()}</div>
          <div className={Styles.underline}></div>
        </div>
        <form onSubmit={handleSubmit}>
          {action === "signup" && (
            <div className={Styles.input}>
              <img src={User_icon} alt="" />
              <input type="text" name="name" value={formValue.name} placeholder="Name" onChange={handleInput} />
            </div>
          )}
          <div className={Styles.input}>
            <img src={Email_icon} alt="" />
            <input type="email" name="email" value={formValue.email} placeholder="Email-id" onChange={handleInput} />
          </div>
          <div className={Styles.input}>
            <img src={Password_icon} alt="" />
            <input type="password" placeholder="Password" name="password" value={formValue.password} onChange={handleInput} />
          </div>
          <div className={Styles.Submit_container}>
            <button type="submit" className={Styles.Submit}>
              {action === "login" ? "Login" : "Sign Up"}
            </button>
          </div>
        </form>
        {action === "login" ? (
          <div className={Styles.forgot_password}>Forgot Password?? <span>Click here</span></div>
        ) : null}
        <button onClick={() => setAction(action === "login" ? "signup" : "login")} className={Styles.switch}>
          Switch to {action === "login" ? "Sign Up" : "Login"}
        </button>
      </div>
    </>
  );
};

export default Loginpage;
