import React from "react";
import "./Header.css";

import contexts from "../context/ValueContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/icons-material/Badge";

const Header = () => {
  let value = React.useContext(contexts.ValueContext);
  return (
    <div className="header">
      <div>onCampus Kicks</div>
      <nav>
        <li>
          <PersonIcon className="person" />
        </li>
        <li>
          <FavoriteIcon className="heart" />
        </li>
        <li>
          <Badge badgeContent={value.state} showZero color="white">
            <ShoppingCartIcon className="cart" />
          </Badge>
        </li>
      </nav>
    </div>
  );
};

export default Header;
