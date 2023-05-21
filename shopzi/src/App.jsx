import React from "react";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlist-page" element={<ProductList />} />
        <Route path="/api-test" element={<Mockman />} />
      </Routes>
    </>
  );
};

export default App;
