import { createContext, useContext, useState } from "react";
import main from "../main.json";
import img from "../assets/ProductImages/2.png";
import axios from "axios";
const MyContext = createContext(main.products.productList);

export const GlobalContext = ({ children }) => {
  const [products, setproducts] = useState(main.products.productList);

  function addProduct(newproduct) {
    console.log(newproduct);
    main.products.productList = [...main.products.productList, newproduct];
    setproducts(main.products.productList);
  }

  function deleteProduct(delId) {
    main.products.productList = main.products.productList.filter(
      (product) => product.id !== delId
    );
    setproducts(main.products.productList);
  }

  function UpdateProduct(UpId, newproduct) {
    // productList = productList.filter((product)=> product.id !== delId);

    console.log(newproduct);
    const indexva = main.products.productList.findIndex(
      (p) => p.id === newproduct.id
    );
    // main.products.productList[indexva].title = newproduct.title;
    // main.products.productList[indexva].category = newproduct.category;
    // main.products.productList[indexva].price = newproduct.price;
    // main.products.productList[indexva].delivery = newproduct.delivery;

    setproducts(main.products.productList);
    console.log(main.products.productList);
  }

  return (
    <MyContext.Provider
      value={{ products, addProduct, deleteProduct, UpdateProduct }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const GetContext = () => useContext(MyContext);
