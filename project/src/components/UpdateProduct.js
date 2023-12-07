import React from "react";
import axios from "axios";
import { useState } from "react";
import { GetContext } from "../context/GlobalContext";
// import { Routes, Route, Link } from "react-router-dom";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

export const UpdateProduct = (props) => {
  const [ptitle, setptitle] = useState([]);
  const [pdesc, setpdesc] = useState([]);
  const [pprice, setpprice] = useState([]);
  const [pimage, setpimage] = useState([]);
  // const [pid] = useParams("");
  const nav = useNavigate();

  const location = useLocation();
  const { Data } = location.state;

  const pid = Data.id;
  // const [product, setProduct] = useState({
  //   id: "",
  //   title: "",
  //   description: "",
  //   category: "",
  //   price: 0,
  //   delivery: 0,
  //   img: "",
  // });
  const { UpdateProduct } = GetContext();

  const { register } = useForm({
    defaultValues: {
      productTitle: Data.title,
      productDesc: Data.description,
      productPrice: Data.price,
      productDelivery: Data.delivery,
      productCat: Data.category,
    },
  });

  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod tristique interdum. Nam sit amet ex ipsum. Morbi congue, lorem at semper iaculis, massa dui tincidunt justo, eu venenatis risus eros vel dolor.";
  const resetForm = () => {
    document.getElementById("update-product-form").reset();
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(e);
    UpdateProduct(Data.id, {
      id: Data.id,
      title: e.target[0].value,
      description: e.target[1].value,
      category: e.target[4].value,
      price: e.target[2].value,
      delivery: e.target[3].value,
      img: e.target[5].value,
    });
    resetForm();
    // nav("/admin/products");
  };
  /* Backend Code */
  // axios
  //   .put("http://localhost:8085/update" + pid, {
  //     ptitle,
  //     pdesc,
  //     pprice,
  //     pimage,
  //   })
  //   .then((res) => {
  //     console.log(res);
  //     nav("/");
  //   })
  //   .catch((err) => console.log(err));
  axios
    .put("http://localhost:8085/update", {
      ptitle,
      pdesc,
      pprice,
      pimage,
      pid,
    })
    .then((res) => {
      console.log(res);
      // navigate("/");
    })
    .catch((err) => console.log(err));
  return (
    <div className="addProduct">
      <form id="update-product-form" onSubmit={handleForm}>
        <h1 className="product-header">Update Product</h1>
        <div className="inputbox">
          <label>Product Title</label>
          <input
            type="text"
            placeholder="My Product"
            name="productTitle"
            {...register("productTitle")}
            required
          />
        </div>
        <div className="inputbox">
          <label htmlFor="product desc">Product description</label>
          <textarea
            placeholder={lorem}
            name="productDesc"
            {...register("productDesc")}
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
              name="productPrice"
              {...register("productPrice")}
              required
              onChange={(e) => setpprice(e.target.value)}
            />
          </div>
          <div className="inputbox price">
            <label>Product Delivery</label>
            <input
              min="0"
              max="500"
              type="number"
              placeholder="200"
              name="productDelivery"
              {...register("productDelivery")}
              required
            />
          </div>
        </div>
        <div className="siblings">
          <div className="inputbox">
            <label htmlFor="Product-category">Product Category</label>
            <input
              list="category"
              id="Product-category"
              placeholder="Sneakers"
              name="productCat"
              {...register("productCat")}
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
            <label>Product Image {Data.img}</label>.
            <input
              type="file"
              name="pimage"
              accept="image/png, image/jpg, image/jpeg"
              multiple
              onChange={(e) => setpimage(e.target.value)}
            />
          </div>
        </div>
        <div className="centre">
          <button type="submit" className="s-btn" onSubmit={handleForm}>
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};
