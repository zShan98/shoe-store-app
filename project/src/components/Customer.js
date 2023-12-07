import React, { useEffect } from "react";
import Customer_receipt from "./Customer_receipt";
import main from "../main.json";
import Customer_options from "./Customer_options";
import { useState } from "react";
import axios from "axios";

export const Customer = () => {
  const [count, setcount] = useState(0);
  const [Checked, setChecked] = useState(false);

  function handleCheckboxChange(isChecked) {
    setcount(isChecked ? count + 1 : count - 1);
  }

  const [customers, setcustomers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8085/customers_read") // Adjust the URL if needed
      .then((res) => setcustomers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="order_structure">
        <Customer_options
          counts={count}
          selected={setChecked}
          checked={Checked}
        />
        <table className="order_table">
          <thead className="table_head">
            <th>Select</th>
            <th>Customer id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Address</th>
          </thead>

          {customers.map((item) => {
            return (
              <Customer_receipt
                customer_id={item.cid}
                fname={item.Fname}
                lname={item.Lname}
                email={item.email}
                phone={item.address}
                onCheckboxChange={handleCheckboxChange}
                // selected={Checked}
              />
            );
          })}
        </table>
      </div>
    </>
  );
};
