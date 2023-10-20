import React from "react";
import { useState } from "react";
export const AddProduct = ()=> {

let productlist = [];

const [products, setProducts] = useState(productlist);

let product = {id: '', title: '', description: '', category: '', price: 0, delivery: 0, img: ''};


const resetForm = () => { 
    document.getElementById("add-product-form").reset();
  }

const handleForm = (e)=>{

    e.preventDefault();
    product = {id: 1, title: e.target[0].value,
            description: e.target[1].value, category: e.target[4].value, price: e.target[2].value,
            delivery: e.target[3].value, img: e.target[5].value};

        productlist = [...productlist, product]
        setProducts(productlist);
        console.log(products);
        resetForm();

}


return(
    <div className="addProduct">
        <form id="add-product-form" onSubmit={handleForm}>
            <h1>Add Product</h1>
            <div className="inputbox">
                <label>Product Title</label>
                <input type= "text" placeholder="My Product" required/>
            </div>
            <div className="inputbox">
                <label htmlFor="product desc">Product description</label>
                <textarea name="product desc" required></textarea>
            </div>
            <div className="siblings">
                <div className="inputbox price">
                    <label>Product Pricing</label>
                    <input min="1" type="number" required/>
                </div>
                <div className="inputbox price">
                    <label>Product Delivery</label>
                    <input min="0" type="number" required/>
                </div>
            </div>
            <div className="siblings">
                <div className="inputbox">
                    <label for="Product-category">Product Category</label>
                    <input list="category" name="Product-category" id="Product-category" required />
                    <datalist id="category" >
                        <option value="Sneakers" />
                        <option value="Boots" />
                        <option value="Lofers" />
                        <option value="Sandles" />
                        <option value="Joggers" />
                        <option value="Other" />
                    </datalist>
                </div>
                <div className="inputbox">
                    <label>Product Image</label>.
                    <input type="file"  name="pimage" accept="image/png, image/jpg, image/jpeg" required multiple/>
                </div>
            </div>
            <div className="centre">
                <button type="submit" className="s-btn">Add Product</button>
            </div>
        </form>
    </div>
)

}