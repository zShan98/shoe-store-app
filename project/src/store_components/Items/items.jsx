import React from "react";
import "./items.css";
import contexts from "../context/ValueContext";
import { useNavigate } from "react-router-dom";

const Item = ({ id, name, img, handlecount }) => {
  let value = React.useContext(contexts.ValueContext);
  const [add, setAdd] = React.useState(true);
  const navigate = useNavigate();

  const handleClick = (bool) => {
    handlecount(bool);
  };

  return (
    <div className="item">
      <div
        onClick={() => {
          navigate(`/shop/product/${id}`);
        }}
        className="image"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <h1>{name}</h1>
      {add ? (
        <button
          onClick={() => {
            value.dispatch({
              type: "INCREMENT",
            });

            setAdd(!add);
            handleClick(true);
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
    </div>
  );
};

export default Item;
