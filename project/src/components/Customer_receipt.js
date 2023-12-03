import React from "react";

const Customer_receipt = (props) => {
  const handleCheckboxChange = (event) => {
    props.onCheckboxChange(event.target.checked);
  };

  return (
    <>
      <tr>
        <td>
          <input
            type="checkbox"
            name="status_chk"
            id=""
            checked={props.selected}
            onChange={handleCheckboxChange}
          />
        </td>
        <td>{props.customer_id}</td>
        <td>{props.fname}</td>
        <td>{props.lname}</td>
        <td>{props.email}</td>
        <td>{props.phone}</td>
      </tr>
    </>
  );
};

export default Customer_receipt;
