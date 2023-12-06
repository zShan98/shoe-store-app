import React from "react";
import "./OrderModal.css";
import { useState } from "react";
import Table from "../Table/Table";
import main from "../../main.json"


export const OrderModal = (props) => {
  console.log(props.prodData);


  const [total, settotal] = useState(0);
  const [count, setcount] = useState(0);
    

  return (
    <>
      <div className="cart-screen">
        <div className="cart-container">
          <div className="cart-header">
          <div className="modal-main">
            Order Placed Successfully
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
