import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";

import { ProductContext } from "./ProductContext";
import { CartContext } from "./CartContext";
import {
  WishlistReducer,
  initialWishlistState,
} from "../reducer/WishlistReducer";
import { AuthContext } from "./AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const WishListContext = createContext();
export const WishListContextProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(
    WishlistReducer,
    initialWishlistState
  );

  const { loginToken } = useContext(AuthContext);

  const getWishlistItems = async () => {
    try {
      const response = await axios.get("/api/user/wishlist", {
        headers: {
          authorization: loginToken,
        },
      });

      console.log(response);
      wishlistDispatch({
        type: "getWishlistItems",
        payload: response?.data?.wishlist,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const checkInWishlist = (productId) => {
    return wishlistState.wishlist.find(
      (wishlistItem) => wishlistItem._id === productId
    );
  };

  const addToWishList = async (productDetails) => {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product: { ...productDetails } },
        {
          headers: {
            authorization: loginToken,
          },
        }
      );
      console.log("res", response.data.wishlist);
      wishlistDispatch({
        type: "addProductToWishlist",
        payload: response?.data?.wishlist,
      });
      toast.success(`Added to Wishlist`, {
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

  const removeFromWishlist = async (productId) => {
    console.log(productId);
    try {
      const response = await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: {
          authorization: loginToken,
        },
      });
      console.log(response);
      wishlistDispatch({
        type: "removeFromWishlist",
        payload: response?.data?.wishlist,
      });
      toast.success(`Removed from Wishlist`, {
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

  useEffect(() => {
    loginToken && getWishlistItems();
    // eslint-disable-next-line
  }, [loginToken]);
  return (
    <WishListContext.Provider
      value={{
        item: 2,
        wishlistState,
        addToWishList,
        removeFromWishlist,
        checkInWishlist,
      }}
    >
      {" "}
      {children}
    </WishListContext.Provider>
  );
};
