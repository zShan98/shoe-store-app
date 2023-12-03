import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import logo from "./assets/icons/logo_white.svg";
import logo_black from "./assets/icons/logo_black.png";
import { Sidebar } from "./components/Sidebar";
import { SellerHeader } from "./components/SellerHeader";
import { AddProduct } from "./components/AddProduct";
import { GlobalContext } from "./context/GlobalContext";
import { ProductList } from "./components/ProductList";
import { Admin } from "./components/Admin";
import { View_orders } from "./components/View_orders";
import { useState } from "react";
import { UpdateProduct } from "./components/UpdateProduct";
import { Customer } from "./components/Customer";


export const StoreBack = ()=> {
  const [state1, setState1] = useState(false);

  return (
    <GlobalContext>
      <SellerHeader image={logo} />
      <div className="flex-container">
        <Sidebar image={logo_black} />
        <Routes>
          <Route path="/" element={<Admin />}></Route>
          <Route path="/orders" element={<View_orders />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/products/add-product" element={<AddProduct />}></Route>
          <Route
            path="/products/update-product"
            element={<UpdateProduct />}
          ></Route>
          <Route path="/customers" element={<Customer />}></Route>
        </Routes>
      </div>
    </GlobalContext>

  );
}

