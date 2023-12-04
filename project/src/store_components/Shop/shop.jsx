import React from "react";
import Navbar from "../Navbar/navbar";
import Header from "../Header/Header";
import Footer from "../Footer/footer";
import "./Shop.css";
import { Outlet } from "react-router-dom";

const Shop = () => {
  return (
    <div className="Shop-page">
      <Header />
      <Navbar name={"shop"} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Shop;
