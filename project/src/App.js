import "./App.css";
import { StoreFront } from "./StoreFront";
import { StoreBack } from "./StoreBack";
import { Loginsignup } from "./components/login/Loginsignup";

function App() {
  return (
    <Loginsignup />
    //   <Routes>
    //         <Route path="/store-back" element={<StoreBack />}></Route>
    //         <Route path="/store-front" element={<StoreFront />}></Route>

    //       </Routes>
  );
}

export default App;
