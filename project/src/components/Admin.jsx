import React from "react";
import Orders_Info from "./Orders_Info";

export const Admin = () => {
  return (
    <>
      <div className="order">
        <Orders_Info />
        <div className="Admin_flex">
          <div className="Admin_flexdiv Admin_flexdiv_1">
            <div className="Afd1-child">
              <div>
                <h3>Shopping Cart</h3>
                <p>In Last 1 Hour</p>
              </div>
              <div>
                <h1>0</h1>
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>

            <div className="Afd1-child">
              <div>
                <h3>Shopping Cart</h3>
                <p>In Last 1 Hour</p>
              </div>
              <div>
                <h1>0</h1>
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>

          <div className="Admin_flexdiv Admin_flexdiv_2">
            <h1>Brands Collection</h1>
            <ul>
              <li>
                <p>Nike Shoes</p>
                <p>20</p>
              </li>
              <li>
                <p>Addidas Shoes</p>
                <p>20</p>
              </li>
              <li>
                <p>Jordan Shoes</p>
                <p>20</p>
              </li>
              <li>
                <p>Ndure Shoes</p>
                <p>20</p>
              </li>
              <li>
                <p>Outfitters Shoes</p>
                <p>20</p>
              </li>
            </ul>
          </div>

          <div className="Admin_flexdiv Admin_flexdiv_2">
            <h1>Popular Slaes</h1>
            <ul>
              <li>
                <p>Nike Shoes</p>
                <p>40%</p>
              </li>

              <li>
                <p>Addidas Shoes</p>
                <p>30%</p>
              </li>

              <li>
                <p>Jordan Shoes</p>
                <p>10%</p>
              </li>
              <li>
                <p>Ndure Shoes</p>
                <p>10%</p>
              </li>
              <li>
                <p>Outfitters Shoes</p>
                <p>10%</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
