import React from "react";
import axios from "axios";
import { useState } from "react";
import { GetContext } from "../context/GlobalContext";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

export const AddProduct = (props) => {
  const [ptitle, setptitle] = useState([]);
  const [pdesc, setpdesc] = useState([]);
  const [pprice, setpprice] = useState([]);
  const [pimage, setpimage] = useState([]);
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    id: "",
    title: "",
    description: "",
    category: "",
    price: 0,
    delivery: 0,
    img: "",
  });
  const { addProduct } = GetContext();

  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod tristique interdum. Nam sit amet ex ipsum. Morbi congue, lorem at semper iaculis, massa dui tincidunt justo, eu venenatis risus eros vel dolor.";
  const resetForm = () => {
    document.getElementById("add-product-form").reset();
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(e);
    addProduct({
      id: product.id + 1,
      title: e.target[0].value,
      description: e.target[1].value,
      category: e.target[4].value,
      price: e.target[2].value,
      delivery: e.target[3].value,
      img: e.target[5].value,
    });

    /* Backend Code */
    axios
      .post("http://localhost:8085/product_add", {
        ptitle,
        pdesc,
        pprice,
        pimage,
      })
      .then((res) => {
        console.log(res);
        // navigate("/");
      })
      .catch((err) => console.log(err));

    resetForm();
    navigate("/admin/products");
  };

  return (
    <div className="addProduct">
      <form id="add-product-form" onSubmit={handleForm}>
        <h1 className="product-header">Add Product</h1>
        <div className="inputbox">
          <label>Product Title</label>
          <input
            type="text"
            placeholder="My Product"
            required
            onChange={(e) => setptitle(e.target.value)}
          />
        </div>
        <div className="inputbox">
          <label htmlFor="product desc">Product description</label>
          <textarea
            name="product desc"
            placeholder={lorem}
            required
            onChange={(e) => setpdesc(e.target.value)}
          ></textarea>
        </div>
        <div className="siblings">
          <div className="inputbox price">
            <label>Product Pricing</label>
            <input
              min="1"
              type="number"
              placeholder="1400"
              required
              onChange={(e) => setpprice(e.target.value)}
            />
          </div>
          <div className="inputbox price">
            <label>Product Delivery</label>
            <input min="0" max="500" type="number" placeholder="200" required />
          </div>
        </div>
        <div className="siblings">
          <div className="inputbox">
            <label htmlFor="Product-category">Product Category</label>
            <input
              list="category"
              name="Product-category"
              id="Product-category"
              placeholder="Sneakers"
              required
            />
            <datalist id="category">
              <option value="Sneakers" />
              <option value="Boots" />
              <option value="Lofers" />
              <option value="Sandles" />
              <option value="Joggers" />
              <option value="Other" />
            </datalist>
          </div>
          <div className="inputbox">
            <label>Product Image</label>.
            <input
              type="file"
              name="pimage"
              accept="image/png, image/jpg, image/jpeg"
              required
              multiple
              onChange={(e) => setpimage(e.target.value)}
            />
          </div>
        </div>
        <div className="centre">
          <button type="submit" className="s-btn">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};
