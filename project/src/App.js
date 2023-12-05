import { StoreFront } from "./StoreFront";
import { StoreBack } from "./StoreBack";
import { Loginsignup } from "./components/login/Loginsignup";
import { Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <>
    {/* <Loginsignup /> */}
     <Routes>
            <Route path="/store-back" element={<StoreBack />}></Route>
            <Route path="/" element={<StoreFront />}></Route>

          </Routes>
    </>
  );
}

export default App;
