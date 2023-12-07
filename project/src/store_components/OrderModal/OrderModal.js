import React from "react";
import "./OrderModal.css";
import { useState } from "react";
import Table from "../Table/Table";
import main from "../../main.json"


export const OrderModal = (props) => {
  console.log(props.prodData);


  const [total, settotal] = useState(0);
  const [count, setcount] = useState(0);
    
  const handleData = ()=> {
    props.handleClick(false)

  }
  return (
    <>
      <div className="modal-screen" onClick={handleData}>
        <div className="modal-container">
          <div className="modal-header">
          <div className="modal-main">
            Order Placed Successfully
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
