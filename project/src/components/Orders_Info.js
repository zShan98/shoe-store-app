import React from "react";

const Orders_Info = () => {
  return (
    <>
      <div className="summary">
        <div className="flex_div">
          <h3>Total Orders</h3>
          <h4 style={{ color: "blue" }}>
            <i className="fa-solid fa-box"></i>30
          </h4>
        </div>
        <div className="flex_div">
          <h3>Fullfiled</h3>
          <h4 style={{ color: "green" }}>15</h4>
        </div>
        <div className="flex_div">
          <h3>Unfullfiled</h3>
          <h4 style={{ color: "red" }}>10</h4>
        </div>
        <div className="flex_div">
          <h3>Unpaid Amount</h3>
          <h4 style={{ color: "red" }}>$ 2000</h4>
        </div>
        <div className="flex_div">
          <h3>Paid Amount</h3>
          <h4 style={{ color: "green" }}>$ 1250</h4>
        </div>
      </div>
    </>
  );
};

export default Orders_Info;
