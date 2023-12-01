import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import logo from './assets/icons/logo_white.svg'
import logo_black from './assets/icons/logo_black.png'
import {Sidebar} from './components/Sidebar';
import {SellerHeader} from './components/SellerHeader';
import { AddProduct } from './components/AddProduct';
import { GlobalContext } from './context/GlobalContext';
import { ProductList } from './components/ProductList';
import { Orders } from './components//Orders';
import { View_orders } from './components/View_orders';
import { useState } from 'react';

function App() {
  const [state1, setState1] = useState(false); 

  return (
    <GlobalContext>
          <SellerHeader image={logo} />
          <div className='flex-container'>
            <Sidebar image={logo_black}/> 
            <Routes>
            <Route path="/" element={<></>}></Route> 
            <Route path="/orders" element={<Orders />}></Route>
            <Route path="/products" element={<ProductList stateOne={setState1}/>}></Route>
            <Route path="/products/add-product" element={<AddProduct stateOne={setState1}/>}></Route>
          </Routes> 
          </div>
    </GlobalContext>
  );
}

export default App;
