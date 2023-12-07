import React, { useEffect, useState } from "react";
import axios from "axios";
const Order_recipt = (props) => {
  const [O_status, setO_status] = useState(false);
  const [cid, setcid] = useState(props.cid);

  function handleCheck(event) {
    setO_status(event.target.checked);

    axios
      .put("http://localhost:8085/order_update", {
        O_status,
        cid,
      })
      .then((res) => {
        console.log(res);
        // navigate("/");
      })
      .catch((err) => console.log(err));
  }
  //function Orders() {}
  return (
    <>
      <tr className="receipt">
        <td>{props.order_id}</td>
        <td>{props.date}</td>
        <td>{props.customer_name}</td>
        <td>{props.channel}</td>
        <td>{props.status}</td>
        <td>{props.Delivery}</td>
        <td>
          <input
            type="checkbox"
            name="status_chk"
            id=""
            onChange={handleCheck}
          />
        </td>
      </tr>
    </>
  );
};

export default Order_recipt;
