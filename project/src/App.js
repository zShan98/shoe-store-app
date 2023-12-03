// import "./App.css";
// import { Routes, Route, Link } from "react-router-dom";
// import logo from "./assets/icons/logo_white.svg";
// import logo_black from "./assets/icons/logo_black.png";
// import { Sidebar } from "./components/Sidebar";
// import { SellerHeader } from "./components/SellerHeader";
// import { AddProduct } from "./components/AddProduct";
// import { GlobalContext } from "./context/GlobalContext";
// import { ProductList } from "./components/ProductList";
// import { Admin } from "./components/Admin";
// import { View_orders } from "./components/View_orders";
// import { useState } from "react";
// import { UpdateProduct } from "./components/UpdateProduct";
// import { Customer } from "./components/Customer";

// function App() {
//   const [state1, setState1] = useState(false);

//   return (
//     <GlobalContext>
//       <SellerHeader image={logo} />
//       <div className="flex-container">
//         <Sidebar image={logo_black} />
//         <Routes>
//           <Route path="/" element={<Admin />}></Route>
//           <Route path="/orders" element={<View_orders />}></Route>
//           <Route path="/products" element={<ProductList />}></Route>
//           <Route path="/products/add-product" element={<AddProduct />}></Route>
//           <Route
//             path="/products/update-product"
//             element={<UpdateProduct />}
//           ></Route>
//           <Route path="/customers" element={<Customer />}></Route>
//         </Routes>
//       </div>
//     </GlobalContext>
//   );
// }

// export default App;



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

function App() {
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

              <Route path="product/:productId" element={<Preview />} />
              <Route path="register" element={<Register />}></Route>
              <Route path="contact" element={<Contact />}></Route>
            </Route>
          </Routes>
        </div>
      </contexts.ValueContext.Provider>
    </div>
  );
}

export default App;






























