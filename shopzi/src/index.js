import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ProductProvider } from "./context/ProductContext";

// Call make Server
makeServer();

ReactDOM.render(

    <Router>
      <ProductProvider>
        <App />
      </ProductProvider>
    </Router>
,
  document.getElementById("root")
);
