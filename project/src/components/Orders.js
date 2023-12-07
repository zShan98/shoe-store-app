import React, { useEffect, useState } from "react";
import Order_recipt from "./Order_recipt"; // Make sure the file name is correct
import Order_filters from "./Order_filters";
import axios from "axios";

export const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8085/") // Adjust the URL if needed
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  }, []);

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
            <th>Status</th>
            <th>Items</th>
            <th>Delivery</th>
            <th>Delivered</th>
          </thead>

          {orders.map((item, i) => (
            <Order_recipt
              key={i}
              order_id={item.oid}
              date={item.date}
              customer_name={item.Fname}
              channel={"Online Store"}
              status={item.status}
              no_items={item.no_items}
              Delivery={item.Delivery}
            />
          ))}
        </table>
      </div>
    </>
  );
};
