import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";

import { AuthContext } from "./AuthContext";
import { CartReducer, initialCartState } from "../reducer/CartReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { loginToken } = useContext(AuthContext);

  const [cartState, cartDispatch] = useReducer(CartReducer, initialCartState);

  // console.log(loginToken);

  const getCartItems = async () => {
    try {
      const response = await axios.get("/api/user/cart", {
        headers: {
          authorization: loginToken,
        },
      });
      // console.log(response);
      cartDispatch({ type: "getCartItems", payload: response?.data?.cart });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loginToken && getCartItems();
    // eslint-disable-next-line
  }, [loginToken]);

  const addToCart = async (productDetails) => {
    // console.log(productDetails);
    try {
      const response = await axios.post(
        "/api/user/cart",
        { product: { ...productDetails } },
        {
          headers: {
            authorization: loginToken,
          },
        }
      );
      console.log("res", response.data.cart);
      cartDispatch({ type: "addProductToCart", payload: response?.data?.cart });
      toast.success("Added to Cart", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error(error.response);
    }
  };

  const removeFromCart = async (productId) => {
    console.log(productId);
    try {
      const response = await axios.delete(`/api/user/cart/${productId}`, {
        headers: {
          authorization: loginToken,
        },
      });
      console.log(response);
      cartDispatch({ type: "removeFromcart", payload: response?.data?.cart });
      toast.success("Removed from Cart", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const updateCartQnty = async (productId, actionType) => {
    console.log(productId, actionType);
    try {
      const response = await axios.post(
        `/api/user/cart/${productId}`,
        {
          action: {
            type: actionType,
          },
        },
        {
          headers: {
            authorization: loginToken,
          },
        }
      );
      console.log(response);
      cartDispatch({ type: "updateCartQnty", payload: response?.data?.cart });
      toast.success(`Product quantity ${actionType}ed`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const checkInCart = (productId) => {
    return cartState.cart.find((cartItem) => cartItem._id === productId);
  };

  const totalPrice = cartState.cart.reduce(
    (acc, curr) => (Number(acc) + Number(curr.price) * curr.qty).toFixed(2),
    0
  );

  const discountPrice = cartState.cart.reduce(
    (acc, curr) =>
      (
        Number(acc) +
        Number(curr.price) -
        (
          Number(curr.price) * Number((Number(curr.discount) / 100).toFixed(2))
        ).toFixed(2)
      ).toFixed(2),
    0
  );

  const TotalFinalPrice = totalPrice - discountPrice;

  const orderedItemsPrice = cartState.orderedItems.reduce(
    (acc, curr) => (Number(acc) + Number(curr.price) * curr.qty).toFixed(2),
    0
  );

  const discountPriceOfOrderedItems = cartState.orderedItems.reduce(
    (acc, curr) =>
      (
        Number(acc) +
        Number(curr.price) -
        (
          Number(curr.price) * Number((Number(curr.discount) / 100).toFixed(2))
        ).toFixed(2)
      ).toFixed(2),
    0
  );
  const finalOrderedItemsPrice =
    orderedItemsPrice - discountPriceOfOrderedItems;
  return (
    <CartContext.Provider
      value={{
        item: 2,
        addToCart,
        checkInCart,
        cartState,
        totalPrice,
        discountPrice,
        TotalFinalPrice,

        removeFromCart,
        updateCartQnty,
        cartDispatch,
        finalOrderedItemsPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
