import React, { useEffect, useState } from "react";
import axios from "axios";
const Order_recipt = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8085/")
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleCheck(event) {
    setIsChecked(event.target.checked);
  }
  //function Orders() {}
  return (
    <>
      <tr className="receipt">
        <td>{props.order_id}</td>
        <td>{props.date}</td>
        <td>{props.customer_name}</td>
        <td>{props.channel}</td>
        <td>{isChecked ? "Done" : "pending"}</td>
        <td>{isChecked ? "fullfilled" : "Unfulfilled"}</td>
        <td>{props.no_items}</td>
        <td>{props.Deleivery}</td>
        <td>
          <input
            type="checkbox"
            name="status_chk"
            id=""
            onChange={handleCheck}
          />
        </td>
      </tr>
      <thead>
        <tr>
          <th>oid</th>
          <th>delivery</th>
          <th>cid</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((data, i) => (
          <tr key={i}>
            <td>{data.oid}</td>
            <td>{data.deleivery}</td>
            <td>{data.cid}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default Order_recipt;
