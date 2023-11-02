import React from "react";
import List from "./List";

const Side = () => {
  const lists = [
    {
      option: "Home",
      icon: "fa-solid fa-house",
      path: "/Admin",
    },
    {
      option: "Orders",
      icon: "fa-solid fa-box",
      path: "/Admin",
    },
    {
      option: "Products",
      icon: "fa-solid fa-tag",
      path: "/Admin",
    },
    {
      option: "Customer",
      icon: "fa-solid fa-user",
      path: "/Admin",
    },
    {
      option: "Discounts",
      icon: "fa-solid fa-ticket",
      path: "/Admin",
    },
    {
      option: "Reviews",
      icon: "fa-solid fa-star",
      path: "/Admin",
    },
  ];

  return (
    <>
      <div id="side" className="sidebar">
        <ul>
          {lists.map((item) => {
            return (
              <List path={item.path} icon={item.icon} option={item.option} />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Side;
