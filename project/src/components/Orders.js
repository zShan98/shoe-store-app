import React from "react";
import Order_recipt from "./Order_recipt";
import Order_filters from "./Order_filters";

export const Orders = () => {
  return (
    <>
      <div className="order_structure">
        <Order_filters />
        <table className="order_table">
          <thead className="table_head">
            <th>Order</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Channel</th>
            <th>Payment</th>
            <th>Status</th>
            <th>Items</th>
            <th>Deleivery</th>
          </thead>
          <Order_recipt />
          <Order_recipt />
          <Order_recipt />
          <Order_recipt />
          <Order_recipt />
          <Order_recipt />
          <Order_recipt />
        </table>
      </div>
    </>
  );
};


