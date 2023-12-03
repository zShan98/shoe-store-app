import React, { useState } from "react";
import "./login.css";
import main from "../../main.json";

import user_icon from "../../assets/images/person.png";
import email_icon from "../../assets/images/email.png";
import password_icon from "../../assets/images/password.png";

export const Loginsignup = () => {
  const [action, setAction] = useState("Login");

  function login_handler(event) {
    event.preventDefault();
  }

  return (
    <>
      <div class="container">
        <h2 class="login-title">Log in</h2>

        <form class="login-form">
          <div>
            <label for="name">Name </label>
            <input
              id="name"
              type="text"
              placeholder="Eren Buruk"
              name="name"
              required
            />
          </div>

          <div>
            <label for="email">Email </label>
            <input
              id="email"
              type="email"
              placeholder="me@example.com"
              name="email"
              required
            />
          </div>

          <div>
            <label for="password">Password </label>
            <input
              id="password"
              type="password"
              placeholder="password"
              name="password"
              required
            />
          </div>

          <button class="btn btn--form" type="submit" value="Log in">
            Log in
          </button>
        </form>
      </div>
    </>
  );
};
