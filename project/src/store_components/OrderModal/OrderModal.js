import React from "react";
import "./OrderModal.css";
export const OrderModal = (props) => {
  console.log(props.prodData);
  return (
    <div className="modal-screen">
      <div className="modal-container">
        <div className="modal-header">
          <button onClick={props.handleClick}>X</button>
          <h1>{props.prodData.title}</h1>
          <h3>{props.prodData.description}</h3>
          <h5>Price: $ {props.prodData.price}</h5>
        </div>
        <div className="modal-main"></div>
        <div className="modal-footer"></div>
      </div>
    </div>
  );
};
