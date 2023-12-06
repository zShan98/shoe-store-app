import React, { useState } from "react";
import "./Header.css";
import contexts from "../context/ValueContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/icons-material/Badge";
import { OrderModal } from "../OrderModal/OrderModal";

const Header = (props) => {
  let value = React.useContext(contexts.ValueContext);

  return (
    <>
      <div id="header">
        <div className="hlogo">onCampus Kicks</div>
        <nav>
          <li>
            <PersonIcon className="person" />
          </li>
          <li>
            <FavoriteIcon className="heart" />
          </li>
          <li>
            <button className="cart-btn" onClick={props.handleClick}>
              <Badge
                className="cart-badge"
                badgeContent={value.state}
                showZero
                color="white"
              ></Badge>
              <span>{props.count}</span>
            </button>
          </li>
        </nav>
      </div>
    </>
  );
};

export default Header;
