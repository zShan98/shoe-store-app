import './App.css';
import logo from './assets/logo_white.svg'
import logo_black from './assets/logo_black.png'
import {Sidebar} from './components/Sidebar';
import {SellerHeader} from './components/SellerHeader';
import { AddProduct } from './components/AddProduct';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <SellerHeader image={logo} />
        <div className='container-2'>
          <Sidebar image={logo_black}/>
          <AddProduct />
        </div>
      </div>
    </div>
  );
}

export default App;
