import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getAllProducts = async () => {
    const res = await fetch("/api/products");
    const resData = await res.json();
    setProducts(resData.products);
  };

  const fetchCategories = async () => {
    const res = await fetch("/api/categories");
    const resData = await res.json();
    setCategories(resData.categories);
  };

  useEffect(() => {
    getAllProducts();
    fetchCategories();
  }, []);

  return (
    <ProductContext.Provider value={{ item: 1, products,categories }}>
      {children}
    </ProductContext.Provider>
  );
};
