import './App.css';
import logo from './assets/icons/logo_white.svg'
import logo_black from './assets/icons/logo_black.png'
import {Sidebar} from './components/Sidebar';
import {SellerHeader} from './components/SellerHeader';
// import { AddProduct } from './components/AddProduct';
import { GlobalContext } from './context/GlobalContext';
import { ProductList } from './components/ProductList';

function App() {
  return (
    <GlobalContext>
          <SellerHeader image={logo} />
          <div className='flex-container'>
            <Sidebar image={logo_black}/>
            <ProductList />
          </div>
    </GlobalContext>
  );
}

export default App;
