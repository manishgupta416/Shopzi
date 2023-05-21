import { createContext, useState, useEffect, useReducer } from "react";
import { ProductReducer } from "../reducer/ProductReducer";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [state, dispatch] = useReducer(ProductReducer, {
    productsData: [],
    search: "",
    checkbox: [],
    rating: "",
    sort: "",
    range: 0,
    otherCheckboxFilters: [],
  });
  console.log(state.sort);

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

  useEffect(() => {
    dispatch({ type: "SET_PRODUCTS_DATA", payload: products });
  }, [products]);

  const searchProduct =
    state.search.length > 0
      ? state.productsData.filter(({ title }) =>
          title.toLowerCase().includes(state.search)
        )
      : [...products];

  const checkboxProductData =
    state.checkbox.length > 0
      ? searchProduct.filter((product) =>
          state.checkbox.find((category) => product.category === category)
        )
      : searchProduct;

  const ratingFilteredData =
    state.rating.length > 0
      ? checkboxProductData.filter(
          (product) => Number(product.rating) > Number(state.rating)
        )
      : checkboxProductData;

  const sortFilteredData =
    state.sort.length > 0
      ? ratingFilteredData.sort((product1, product2) =>
          state.sort === "lTh"
            ? product1.price - product2.price
            : product2.price - product1.price
        )
      : ratingFilteredData;

  const rangeFilteredProducts =
    Number(state.range) > 0
      ? sortFilteredData.filter(
          (product) => Number(product.price) >= Number(state.range)
        )
      : sortFilteredData;

  const otherFiltersData =
    state.otherCheckboxFilters.length > 0
      ? rangeFilteredProducts.filter((product) =>
          state.otherCheckboxFilters.find((key) => product[key])
        )
      : rangeFilteredProducts;

  console.log(state.otherCheckboxFilters);
  return (
    <ProductContext.Provider
      value={{
        item: 1,
        products,
        categories,
        state,
        dispatch,
        searchProduct,
        checkboxProductData,
        ratingFilteredData,
        sortFilteredData,
        rangeFilteredProducts,
        otherFiltersData,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
