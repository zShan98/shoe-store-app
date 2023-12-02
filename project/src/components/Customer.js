import React from "react";
import Customer_receipt from "./Customer_receipt";
import customer from "../customer.json";
import Customer_options from "./Customer_options";
import { useState } from "react";

export const Customer = () => {
  const [count, setcount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange(isChecked) {
    setcount(isChecked ? count + 1 : count - 1);
  }

  return (
    <>
      <div className="order_structure">
        <Customer_options counts={count} />
        <table className="order_table">
          <thead className="table_head">
            <th>Select</th>
            <th>Customer id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Phone</th>
          </thead>

          {customer.receipts.map((item) => {
            return (
              <Customer_receipt
                customer_id={item.customer_id}
                fname={item.fname}
                lname={item.lname}
                email={item.email}
                phone={item.phone}
                onCheckboxChange={handleCheckboxChange}
              />
            );
          })}
        </table>
      </div>
    </>
  );
};
