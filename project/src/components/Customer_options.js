import React, { useState } from "react";

const Customer_options = (props) => {
  return (
    <>
      <div className="customer_opt">
        <div>{props.counts} Customers Selected</div>
        <button>Export</button>
      </div>
    </>
  );
};

export default Customer_options;
