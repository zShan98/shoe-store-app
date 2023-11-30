import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { GetContext } from "../context/GlobalContext";
import addicon from '../assets/icons/addProduct.svg' 
import deleteicon from '../assets/icons/deleteicon.svg' 
import { AddProduct } from "./AddProduct";
export const ProductList = (props)=> {

    const {products} = GetContext();
    const head = ['Name', 'Description', 'Category', 'Price', 'Image'];
    const headItems = head.map( (item)=>{
        return <th className="">{item}</th>
    })

    const bodyItems = products.map( (item)=>{
        return <tr className="">
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td><img src={item.img} alt="product"/></td>
                </tr>
    })

    const handleClick = ()=>{
        console.log("button clicked !");
        props.stateOne(true);
    }

    return(

        <div className="product-list">
        <div className="flex-container flex-end">
            <h1>All Products</h1>
            <div className="flex-below flex-container">
            {/* <Link to="/add-product" className="nav-item"> */}
                <button className="btn-icon addicon"  onClick={handleClick}>
                  <Link to="/add-product"><img src={addicon} alt="add product"/></Link>
                </button>
            {/* </Link> */}
            <button className="btn-icon deleteicon"  onClick={handleClick}><img src={deleteicon} alt="delete product"/></button>
            </div>
            {/* <Routes> 
                {/* <Route path="/add-product" element={<AddProduct />}></Route>
            </Routes> */} 
        </div>
        <table>
            <thead>
                <tr>
                    {headItems}
                </tr>
            </thead>
            <tbody>
                {bodyItems}
            </tbody>
        </table>
        </div>



    )



}