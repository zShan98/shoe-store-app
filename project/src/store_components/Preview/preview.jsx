import React, { useState } from "react";
import "./preview.css";
import main from "../../main.json";
import img1 from "../../assets/ProductImages/2.png";
import { OrderModal } from "../OrderModal/OrderModal";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import contexts from "../context/ValueContext";

import shoes from "../../shoes";
import StarRateIcon from "@mui/icons-material/StarRate";
import axios from "axios";

const Preview = (props) => {
  const { cid } = props;
  const nav = useNavigate();
  const { productId } = useParams();
  const delivery = 0;
  const O_status = false;
  const price = 300;
  const O_Timedate = new Date();
  let value = React.useContext(contexts.ValueContext);
  const [add, setAdd] = React.useState(true);

  let { name, img } = shoes[productId];
  let randomRating = Math.floor(Math.random() * 6);
  let diff = 5 - randomRating;
  let array = [];
  for (var i = 0; i < diff; i++) {
    array.push(<StarRateIcon key={i} />);
  }
  for (i = 0; i < randomRating; i++) {
    array.push(<StarRateIcon key={i + diff} className="notfill" />);
  }

  console.log(array);

  const [chkorder, setchkorder] = useState(false);

  const handlechkorder = () => {
    setchkorder(!chkorder);
    if (!props.islogin) {
      nav("/shop/signup");
    }
    axios
      .post("http://localhost:8085/order", {
        cid,
        delivery,
        price,
        O_status,
        O_Timedate,
      })
      .then((res) => {
        console.log(res.data.message); // Log the server response
      })
      .catch((err) => console.log(err));
  };

  const handleClick = (bool) => {
    props.handlecount(bool);
  };

  const handlepid = (p) => {
    props.pid(p);
  };

  return (
    <>
      <div className="preview">
        <div className="bigImage">
          <img src={img1} alt="shoes" />
        </div>
        <div className="descriptions">
          <h3>{main.products.productList[productId].title}</h3>
          <p>{main.products.productList[productId].description}</p>
          <div className="colors">
            <div className="red"></div>
            <div className="green"></div>
            <div className="purple"></div>
            <div className="brown"></div>
          </div>
          <div className="priceRatings">
            <p>{main.products.productList[productId].price}</p>
            <p className="ratings">
              {array.map((icon) => {
                return icon;
              })}
            </p>
          </div>

          {add ? (
            <button
              onClick={() => {
                value.dispatch({
                  type: "INCREMENT",
                });

                setAdd(!add);
                handleClick(true);
                handlepid(productId);
              }}
            >
              Add to Cart
            </button>
          ) : (
            <button
              onClick={() => {
                value.dispatch({
                  type: "DECREMENT",
                });
                setAdd(!add);
                handleClick(false);
              }}
            >
              Remove from Cart
            </button>
          )}
          <br />
          <button onClick={handlechkorder}>Order Now</button>
        </div>
      </div>
      {chkorder ? (
        <OrderModal
          handleClick={handlechkorder}
          prodData={main.products.productList[productId]}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Preview;
