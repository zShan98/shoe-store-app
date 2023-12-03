import "./App.css";
import { StoreFront } from "./StoreFront";
import { StoreBack } from "./StoreBack";
function App() {

  return (
    // <GlobalContext>
    //   <SellerHeader image={logo} />
    //   <div className="flex-container">
    //     <Sidebar image={logo_black} />
    //     <Routes>
    //       <Route path="/" element={<Admin />}></Route>
    //       <Route path="/orders" element={<View_orders />}></Route>
    //       <Route path="/products" element={<ProductList />}></Route>
    //       <Route path="/products/add-product" element={<AddProduct />}></Route>
    //       <Route
    //         path="/products/update-product"
    //         element={<UpdateProduct />}
    //       ></Route>
    //       <Route path="/customers" element={<Customer />}></Route>
    //     </Routes>
    //   </div>
    // </GlobalContext>

    <StoreBack />
  );
}

export default App;

































