import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./contact.css";

import Blob1 from "../../Images/blob.svg";
import Blob3 from "../../Images/blob1.svg";
import Blob4 from "../../Images/blob3.svg";

const Contact = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [subject,setSubject] = useState('')
  const [message,setMessage] = useState('')
  const navigate = useNavigate();
  
  function handleSubmit(event){
    event.preventDefault();
    axios.post('http://localhost:8085/create',{name,email,subject,message})
    .then(res => {
      console.log(res);
      navigate('/');
    }).catch(err => console.log(err));
  }
  let [show, setShow] = React.useState(false);

  const showing = () => {
    setShow(true);

    setInterval(function () {
      setShow(false);
    }, 2000);
  };
  return (
    <div className="contact">
      {show ? <p className="alert">Thanks for contacting us.</p> : null}
    {/*<img className="blob1c" src={Blob1} alt="blob" />
      <img className="blob3" src={Blob3} alt="blob" /> */}

      {/* <img className="blob4" src={Blob4} alt="blob" /> */}
      
      <form onSubmit={handleSubmit}>
      <h1>Contact Us</h1>
      <p>React us out at Facebook or Twitter or Mail at infor@abc.com</p>
      <label htmlFor="">Name</label>
      <input type="text" placeholder="Name" onChange={e => setName(e.target.value)}/>
      <label htmlFor="">Email</label>
      <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
      <label htmlFor="">Subject</label>
      <input type="text" placeholder="Subject" onChange={e => setSubject(e.target.value)}/>
      <label htmlFor="">Message</label>
      <input type="text" placeholder="Message" onChange={e => setMessage(e.target.value)}/>
      <input onClick={showing} type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
