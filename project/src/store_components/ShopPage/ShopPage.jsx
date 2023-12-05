import React from "react";
import "./ShopPage.css";
// import contexts from "../context/ValueContext";
import shoes from "../../shoes";
import img from "../../assets/ProductImages/2.png";

// import contexts from "../context/ValueContext";
import main from "../../main.json";

import Item from "../Items/items";

const ShopPage = (props) => {
  return (
    <div className="ShopPage">
      {main.products.productList.map((shoe) => (
        <Item
          key={shoe}
          id={shoe.id}
          name={shoe.title}
          img={img}
          handlecount={props.handlecount}
        />
      ))}
    </div>
  );
};

export default ShopPage;
