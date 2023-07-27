import Footer from "./Component/Footer/Footer";
import Layout from "./Component/Layout/Layout";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Movies from "./Component/Movies/Movies";
import Register from "./Component/Register/Register";
import Tv from "./Component/Tv/Tv";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Register />} />
            <Route path="home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
