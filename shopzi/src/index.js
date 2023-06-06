import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ProductProvider } from "./context/ProductContext";
import { CartContextProvider } from "./context/CartContext";
import { WishListContextProvider } from "./context/WishListContext";
import { AuthProvider } from "./context/AuthContext";

// Call make Server
makeServer();

ReactDOM.render(
  <Router>
    <AuthProvider>
      <ProductProvider>
        <CartContextProvider>
          <WishListContextProvider>
            <App />
          </WishListContextProvider>
        </CartContextProvider>
      </ProductProvider>
    </AuthProvider>
  </Router>,
  document.getElementById("root")
);
