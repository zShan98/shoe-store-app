import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { GetContext } from "../context/GlobalContext";
import addicon from '../assets/icons/addProduct.svg' 
import deleteicon from '../assets/icons/deleteicon.svg' 
import { AddProduct } from "./AddProduct";
export const ProductList = (props)=> {

    const {products, deleteProduct} = GetContext();

    const head = ['Name', 'Description', 'Category', 'Price', 'Image', 'Delete'];
    const headItems = head.map( (item)=>{
        return <th className="">{item}</th>
    })


    const handleClick = ()=>{
        console.log("button clicked !");
    }
    const handleDelete = (iid)=>{
        console.log("Delete button clicked !");
        deleteProduct(iid);
    }
    const bodyItems = products.map( (item)=>{
        return (
        <>
                <tr className="">
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td><img src={item.img} alt="product"/></td>
                    <button className="x-btn" onClick={()=>handleDelete(item.id)}> x </button>

                </tr>

        </>
        )
    })

    return(

        <div className="product-list">
        <div className="flex-container flex-end">
            <h1>All Products</h1>
            <div className="flex-below flex-container">
                <button className="btn-icon addicon"  onClick={handleClick}>
                  <Link to="/products/add-product"><img src={addicon} alt="add product"/></Link>
                </button>
            <button className="btn-icon deleteicon"  onClick={handleClick}><img src={deleteicon} alt="delete product"/></button>
            </div>
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