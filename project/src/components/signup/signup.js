import React from "react"
// import "./signup.css"
import { useState } from "react"
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"


export const Signup = (props) => {
    const nav = useNavigate()
    
    

    const handleSubmit = (e)=> {
        e.preventDefault();
        // console.log(e)
        let dummy = {id: 1, fname:e.target[0].value, lname:e.target[1].value, email:e.target[2].value, address:e.target[3].value, password:e.target[4].value}
        props.handleCustomer(dummy);
        props.ChangeLoginState(true)
        nav("/")
    }

    return(
        <>
        <div class="Khero-section">
        <form action="#" class="Kmain-form" onSubmit={handleSubmit}>
          <div class="Kheader">
          <h5>Sign Up</h5>
          </div>
          <div class="Kform-group">
            <input type="text" placeholder='First name*' class='Kform-input'/>
          </div>

          <div class="form-group">
            <input type="text" placeholder='Last name*' class='Kform-input'/>
          </div>
          <div class="form-group">
            <input type="email" name="email" id="id__email"  class ='Kform-input' placeholder="E-mail"/>
          </div>
          <div class="form-group">
            <input type="text" name="address" id="id__addrs"  class ='Kform-input' placeholder="Address"/>
          </div>
          <div class="form-group">
            <input type="password" name="password" id="passwd"  class ='Kform-input' placeholder="password"/>
          </div>
          <p>Password must be at least 8 charater long.</p>
          
          <div class="Kform-button">
            <button type ='submit' class="btn">Sign Up</button>
          </div>
          <div class="Kform-footer">
          <p>Already a member?</p>
          <Link to="/shop/login">Login</Link>
          </div>
      </form>
    </div>
        </>
    )
}