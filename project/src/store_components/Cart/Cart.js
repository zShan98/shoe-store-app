import React, { useState } from "react";
import "./Cart.css";
import Table from "../Table/Table";
import main from "../../main.json";
import { useEffect } from "react";
import { OrderModal } from "../OrderModal/OrderModal";
import { Loginsignup } from "../../components/login/Loginsignup";
import { Signup } from "../../components/signup/signup";

const Cart = (props) => {
  const [total, settotal] = useState(0);
  const [count, setcount] = useState(0);
  const [click, setclick] = useState(false);

  const handleclick = (bool)=>{
    setclick(bool);
  }


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
                {
                  // main.cart.receipts.push(main.products.productList[props.pid]);
                  main.cart.receipts.map((shoe) => {
                    return (
                      <Table
                        key={shoe}
                        id={shoe.id}
                        name={shoe.title}
                        img={shoe.img}
                        price={shoe.price}
                      />
                    );
                  })
                }
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
            <button onClick={handleclick}>Confirm Cart</button>
          </div>
        </div>
      </div>
      {click ? <Loginsignup /> : <Signup/>}
    </>
  );
};

export default Cart;
