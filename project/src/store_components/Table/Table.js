import React from "react";
import "./Table.css";

const Table = (props) => {
  return (
    <>
      <tr>
        <td class="w-25">
          <img
            src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png"
            class="img-fluid img-thumbnail"
            alt="Sheep"
          />
        </td>
        <td>{props.name}</td>
        <td>${props.price}</td>
        <td class="qty">
          <input type="text" class="form-control" id="input1" value="2" />
        </td>
      </tr>
    </>
  );
};

export default Table;
