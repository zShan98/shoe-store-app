import React, { useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import { StoreFront } from "../../StoreFront";
import { StoreBack } from "../../StoreFront";
import "./login.css";
import main from "../../main.json";
import user_icon from "../../assets/images/person.png";
import email_icon from "../../assets/images/email.png";
import password_icon from "../../assets/images/password.png";

export const Loginsignup = () => {
  const [action, setAction] = useState("Login");
  const nav = useNavigate();
  const login_handler = (e)=> {
    e.preventDefault();
    console.log(e);
    console.log("I am not happy")

    if(
      main.seller.name === e.target[0].value && // username
      main.seller.email === e.target[1].value && // email
      main.seller.password === e.target[2].value// password
    ){
      nav("/store-front")
    }
  }

  return (
    <>
      <div className="container">
        <h2 className="login-title">Log in</h2>

        <form className="login-form" onSubmit={login_handler}>
          <div>
            <label htmlFor="name">Name </label>
            <input id="name" type="text" placeholder="Eren Buruk" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email </label>
            <input id="email" type="email" placeholder="me@example.com" name="email" required />
          </div>
          <div>
            <label htmlFor="password">Password </label>
            <input id="password" type="password" placeholder="password" name="password" required />
          </div>
          <button className="btn btn--form" type="submit" value="Log in">
            Log in
          </button>
        </form>
      </div>
    </>
  );
};
