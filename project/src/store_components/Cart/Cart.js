import React, { useState } from "react";
import "./Cart.css";
import Table from "../Table/Table";
import main from "../../main.json";
import { useEffect } from "react";

const Cart = (props) => {
  const [total, settotal] = useState(0);
  const [count, setcount] = useState(0);

  return (
    <>
      <div className="cart-screen">
        <div className="cart-container">
          <div className="cart-header">
            <h2>Shopping Cart</h2>
            <button onClick={props.handleClick}>X</button>
          </div>
          <div className="cart-main">
            <table class="table table-image">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Qty</th>
                </tr>
              </thead>
              <tbody>
                {main.cart.receipts.map((shoe) => {
                  // useEffect(() => {
                  //   setcount((count) => count + 1);
                  // }, []);

                  // useEffect(() => {
                  //   settotal((total) => total + 1);
                  // }, []);

                  return (
                    <Table
                      key={shoe}
                      id={shoe.id}
                      name={shoe.title}
                      img={shoe.img}
                      price={shoe.price}
                    />
                  );
                })}
              </tbody>
            </table>

            <table className="total">
              <th>Total Item</th>
              <th>Total Price</th>
              <tr>
                <td>{count}</td>
                <td>${total}</td>
              </tr>
            </table>
          </div>
          <div className="cart-footer">
            <button>Confirm Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
