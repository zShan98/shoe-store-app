import { createContext, useContext, useState } from "react";
import product1 from "../assets/ProductImages/2.png";


let productList = [ 
{id: 0, title: 'Product 1', description: 'Product 1', category: 'other', price: 1800, delivery: 100, img: product1},
{id: 1, title: 'Product 2', description: 'Product 2', category: 'joggers', price: 1200, delivery: 100, img: product1},
{id: 2, title: 'Product 3', description: 'Product 3', category: 'sneakers', price: 1700, delivery: 100, img: product1},
{id: 3, title: 'Product 4', description: 'Product 4', category: 'lofers', price: 10000, delivery: 100, img: product1}
]
const MyContext = createContext(productList);


export const GlobalContext = ({children})=>{

    const [products, setproducts] = useState(productList);

    function addProduct( newproduct){
        console.log(newproduct)
        productList = [...productList, newproduct];
        setproducts(productList)
    }

    function deleteProduct(delId){
        productList = productList.filter((product)=> product.id !== delId);
        setproducts(productList)
    }

    function UpdateProduct(UpId, newproduct){
        // productList = productList.filter((product)=> product.id !== delId);
        console.log(newproduct)
        const indexva = productList.findIndex((p)=> p.id === newproduct.id)
                productList[indexva].title = newproduct.title
                productList[indexva].category = newproduct.category
                productList[indexva].price = newproduct.price
                productList[indexva].delivery = newproduct.delivery

        setproducts(productList)
        console.log(productList)
    }

return (

    <MyContext.Provider value={{products, addProduct, deleteProduct, UpdateProduct}}>
        {children}
    </MyContext.Provider>
)

}

export const GetContext = ()=> useContext(MyContext)