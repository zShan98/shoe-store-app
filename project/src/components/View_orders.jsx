import React from "react";
import { Orders } from "./Orders";
import Orders_Info from "./Orders_Info";

export const View_orders = () => {
  return (
    <>
      <div className="order_page">
        <Orders_Info />
        <Orders />
      </div>
    </>
  );
};
