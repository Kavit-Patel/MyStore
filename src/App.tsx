import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
