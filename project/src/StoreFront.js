import React, { useState } from "react";
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
import { Signup } from "./components/signup/signup";
import { Cus_login } from "./store_components/CustomerLogin/Cus_login";

export const StoreFront = () => {
  let dummy = {
    id: 0,
    fname: "",
    lname: "",
    email: "",
    address: "",
    password: "",
  };

  const [count, setcount] = useState(0);
  const [pid, setpid] = useState(0);
  const [islogin, setislogin] = useState(false);
  const [customer, setCustomer] = useState(dummy);

  let [state, dispatch] = React.useReducer(
    numberReducer,
    React.useContext(contexts.ValueContext)
  );

  const handlepid = (p) => {
    setpid(p);
  };

  function handlecount(isChecked) {
    setcount(isChecked ? count + 1 : count - 1);
  }

  const ChangeLoginState = (bool) => {
    setislogin(bool);
  };

  const handleCustomer = (c_data) => {
    setCustomer(c_data);
    console.log(customer);
  };

  return (
    <div>
      <contexts.ValueContext.Provider value={{ state, dispatch }}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="shop"
              element={<Shop count={count} pid={pid} islogin={islogin} />}
            >
              <Route
                path="products"
                element={<ShopPage handlecount={handlecount} />}
              ></Route>
              <Route
                path="product/:productId"
                element={
                  <Preview
                    cid={customer.id}
                    handlecount={handlecount}
                    pid={handlepid}
                    islogin={islogin}
                  />
                }
              ></Route>
              <Route path="register" element={<Register />}></Route>
              <Route path="contact" element={<Contact />}></Route>
              <Route
                path="signup"
                element={
                  <Signup
                    ChangeLoginState={ChangeLoginState}
                    handleCustomer={handleCustomer}
                  />
                }
              ></Route>
              <Route
                path="login"
                element={
                  <Cus_login
                    ChangeLoginState={ChangeLoginState}
                    handleCustomer={handleCustomer}
                  />
                }
              ></Route>
            </Route>
          </Routes>
        </div>
      </contexts.ValueContext.Provider>
    </div>
  );
};
