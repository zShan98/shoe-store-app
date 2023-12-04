import React from "react";
import { Routes, Route, Link } from "react-router-dom";
export const Sidebar = (props) => {
  const list = [
    "Home",
    "Orders",
    "Products",
    "Customers",
    "Discounts",
    "Online Store",
  ];
  const listitems = list.map((item) => {
    return (
      <li className="listitem Border">
        <img src={props.image} alt="icon" />
        {item}
      </li>
    );
  });

  return (
    <div className="sidebar">
      <ul>
        <li className="listitem Border">
          <Link to="" className="nav-item">
            <img src={props.image} alt="icon" />
            {list[0]}
          </Link>
        </li>
        <li className="listitem Border">
          <Link to="orders" className="nav-item">
            <img src={props.image} alt="icon" />
            {list[1]}
          </Link>
        </li>
        <li className="listitem Border">
          <Link to="products" className="nav-item">
            <img src={props.image} alt="icon" />
            {list[2]}
          </Link>
        </li>
        <li className="listitem Border">
          <Link to="customers" className="nav-item">
            <img src={props.image} alt="icon" />
            {list[3]}
          </Link>
        </li>
        <li className="listitem Border">
          <Link to="/online-store" className="nav-item">
            <img src={props.image} alt="icon" />
            {list[5]}
          </Link>
        </li>
      </ul>
    </div>
  );
};
