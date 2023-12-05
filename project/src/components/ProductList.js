import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { GetContext } from "../context/GlobalContext";
import addicon from "../assets/icons/addProduct.svg";
import deleteicon from "../assets/icons/deleteicon.svg";
import img from "../assets/ProductImages/2.png";
import { AddProduct } from "./AddProduct";
import main from "../main.json";

export const ProductList = (props) => {
  const { products, deleteProduct } = GetContext();

  const head = ["Name", "Description", "Category", "Price", "Image", "Delete"];
  const headItems = head.map((item) => {
    return <th className="">{item}</th>;
  });

  const handleClick = () => {
    console.log("button clicked !");
  };
  const handleDelete = (iid) => {
    console.log("Delete button clicked !");
    deleteProduct(iid);
  };
  const bodyItems = main.products.productList.map((item) => {
    return (
      <>
        <tr className="">
          <Link to={`update-product`} state={{ Data: item }}>
            <td>{item.title}</td>
          </Link>
          <td>{item.description}</td>
          <td>{item.category}</td>
          <td>{item.price}</td>
          <td>
            <img src={img} alt="product" />
          </td>
          <button className="x-btn" onClick={() => handleDelete(item.id)}>
            {" "}
            x{" "}
          </button>
        </tr>
      </>
    );
  });

  return (
    <div className="product-list">
      <div className="flex-container flex-end">
        <h1>All Products</h1>
        <div className="flex-below flex-container">
          <button className="btn-icon addicon" onClick={handleClick}>
            <Link to="add-product">
              <img src={addicon} alt="add product" />
            </Link>
          </button>
        </div>
      </div>
      <table>
        <thead>
          <tr>{headItems}</tr>
        </thead>
        <tbody>{bodyItems}</tbody>
      </table>
    </div>
  );
};
