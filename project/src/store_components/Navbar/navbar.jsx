import React from "react";
import "./navbar.css";

import { Link } from "react-router-dom";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";

const Navbar = ({ name }) => {
  let [show, setShow] = React.useState(false);

  return (
    <div id="navbar">
      {/* {`navbar ${name ? name : ""}`} */}
      <ViewHeadlineIcon
        onClick={() => {
          setShow(!show);
        }}
        className="bars"
      />
      <Link
        onClick={() => setShow(false)}
        to="/"
        className={`${show ? "show" : "hide"}`}
      >
        Home
      </Link>
      <Link
        onClick={() => setShow(false)}
<<<<<<< Updated upstream
        to={name === "shop" ? "products" : "shop/products"}
=======
        to="/shop/products"
>>>>>>> Stashed changes
        className={`${show ? "show" : "hide"}`}
      >
        Shop
      </Link>
      <Link
        onClick={() => setShow(false)}
<<<<<<< Updated upstream
        to={name === "shop" ? "register" : "shop/register"}
=======
        to="/shop/register"
>>>>>>> Stashed changes
        className={`${show ? "show" : "hide"}`}
      >
        Register
      </Link>
      <Link
        onClick={() => setShow(false)}
<<<<<<< Updated upstream
        to={name === "shop" ? "contact" : "shop/contact"}
=======
        to="/shop/contact"
>>>>>>> Stashed changes
        className={`${show ? "show" : "hide"}`}
      >
        Contact Us
      </Link>
    </div>
  );
};

export default Navbar;
