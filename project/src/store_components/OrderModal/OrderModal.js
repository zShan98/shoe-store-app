import React from "react";
import "./OrderModal.css";
export const OrderModal = ({ prodData }) => {
  console.log(prodData);
  return (
    <div className="modal-screen">
      <div className="modal-container">
        <div className="modal-header">
          <h1>{prodData.title}</h1>
          <h3>{prodData.description}</h3>
          <h5>Price: $ {prodData.price}</h5>
        </div>
        <div className="modal-main"></div>
        <div className="modal-footer"></div>
      </div>
    </div>
  );
};
