import React, { useState } from "react";
import Navbar from "../Navbar/navbar";
import Header from "../Header/Header";
import Footer from "../Footer/footer";
import "./Shop.css";
import { Outlet } from "react-router-dom";
import Cart from "../Cart/Cart";
import { OrderModal } from "../OrderModal/OrderModal";

const Shop = (props) => {
  const [clicked, setclicked] = useState(false);
  const handleClick = () => {
    setclicked(!clicked);
  };

  return (
    <>
      <div className="Shop-page">
        <Header count={props.count} handleClick={handleClick} />
        <Navbar name={"shop"} />
        <Outlet />
        <Footer />
      </div>
      {clicked ? <Cart handleClick={handleClick} pid={props.pid} /> : ""}
    </>
  );
};

export default Shop;
