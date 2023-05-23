import React from "react";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import Cart from "./pages/Cart/Cart";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlist-page" element={<ProductList />} />
        <Route path="/api-test" element={<Mockman />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
