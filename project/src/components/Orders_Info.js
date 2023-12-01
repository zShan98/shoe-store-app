import React from "react";
import orders from "../orders.json";

const Orders_Info = () => {
  return (
    <>
      <div className="summary">
        <div className="flex_div">
          <h3>Total Orders</h3>
          <h4 style={{ color: "blue" }}>
            <i className="fa-solid fa-box"></i> {orders.quantity.no_orders}
          </h4>
        </div>
        <div className="flex_div">
          <h3>Fullfiled</h3>
          <h4 style={{ color: "green" }}>{orders.quantity.fulfill}</h4>
        </div>
        <div className="flex_div">
          <h3>Unfullfiled</h3>
          <h4 style={{ color: "red" }}>{orders.quantity.unfulfill}</h4>
        </div>
        <div className="flex_div">
          <h3>Unpaid Amount</h3>
          <h4 style={{ color: "red" }}>$ {orders.quantity.unpaid}</h4>
        </div>
        <div className="flex_div">
          <h3>Paid Amount</h3>
          <h4 style={{ color: "green" }}>$ {orders.quantity.paid}</h4>
        </div>
      </div>
    </>
  );
};

export default Orders_Info;
