import { createContext, useContext, useState } from "react";
import product1 from "../assets/images/product1.jpg";


let productList = [ 
{id: 0, title: 'Product 1', description: 'lorem ispium', category: 'other', price: 1800, delivery: 100, img: product1},
{id: 1, title: 'Product 2', description: 'lorem ispium', category: 'joggers', price: 1200, delivery: 100, img: product1},
{id: 2, title: 'Product 3', description: 'lorem ispium', category: 'sneakers', price: 1700, delivery: 100, img: product1},
{id: 3, title: 'Product 4', description: 'lorem ispium', category: 'lofers', price: 10000, delivery: 100, img: product1}
]
const MyContext = createContext(productList);


export const GlobalContext = ({children})=>{

    const [products, setproducts] = useState(productList);

    function addProduct(newproduct){
        productList = [...productList, newproduct];
        setproducts(productList)
    }

    function deleteProduct(delId){
        productList = productList.filter((product)=> product.id !== delId);
        setproducts(productList)
    }

return (

    <MyContext.Provider value={{products, addProduct, deleteProduct}}>
        {children}
    </MyContext.Provider>
)

}

export const GetContext = ()=> useContext(MyContext)