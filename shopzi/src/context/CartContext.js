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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
