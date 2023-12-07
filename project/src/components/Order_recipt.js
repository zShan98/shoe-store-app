import React, { useEffect, useState } from "react";
import axios from "axios";
const Order_recipt = (props) => {
  const [isChecked, setIsChecked] = useState(false);

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
    </>
  );
};

export default Order_recipt;
