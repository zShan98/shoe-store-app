import React from "react";
import "./StoreFront.css";
import contexts from "./store_components/context/ValueContext";
import numberReducer from "./store_components/context/Reducer";
import ShopPage from "./store_components/ShopPage/ShopPage";
import Home from "./store_components/Home/home";
import Register from "./store_components/Register/register";
import Contact from "./store_components/Contact/contact";
import Shop from "./store_components/Shop/shop";
import { Routes, Route } from "react-router-dom";
import Preview from "./store_components/Preview/preview";

export const StoreFront = () => {
  let [state, dispatch] = React.useReducer(
    numberReducer,
    React.useContext(contexts.ValueContext)
  );
  return (
    <div>
      <contexts.ValueContext.Provider value={{ state, dispatch }}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="shop" element={<Shop />}>
              <Route path="products" element={<ShopPage />}></Route>
<<<<<<< Updated upstream
              <Route path="product/:productId" element={<Preview />}></Route>
=======

              <Route path="product/:productId" element={<Preview />} />
>>>>>>> Stashed changes
              <Route path="register" element={<Register />}></Route>
              <Route path="contact" element={<Contact />}></Route>
            </Route>
          </Routes>
        </div>
      </contexts.ValueContext.Provider>
    </div>
  );
};
