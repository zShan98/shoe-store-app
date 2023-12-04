import { StoreFront } from "./StoreFront";
import { StoreBack } from "./StoreBack";
import { Loginsignup } from "./components/login/Loginsignup";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      {/* <StoreFront /> */}
      <Routes>
        {/* <Route path="" element={<Loginsignup />}></Route> */}
        <Route path="/admin/*" element={<StoreBack />}></Route>
        <Route path="/*" element={<StoreFront />}></Route>
      </Routes>
    </>
  );
}

export default App;
