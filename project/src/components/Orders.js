import React from "react";
import Order_recipt from "./Order_recipt";
import Order_filters from "./Order_filters";
import orders from "../orders.json";

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
            <th>Delivered</th>
          </thead>

          {orders.receipts.map((item) => {
            return (
              <Order_recipt
                order_id={item.order_id}
                date={item.date}
                customer_name={item.customer_name}
                channel={item.channel}
                payment={item.payment}
                stats={item.status}
                no_items={item.no_items}
                Deleivery={item.Deleivery}
              />
            );
          })}
        </table>
      </div>
    </>
  );
};
