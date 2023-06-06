import { Children, createContext, useContext, useState } from "react";
import { ProductContext } from "./ProductContext";
import { CartContext } from "./CartContext";

export const WishListContext = createContext();
export const WishListContextProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const { products } = useContext(ProductContext);
  const { cart } = useContext(CartContext);

  const addToWishList = (selectedImage) => {
    const isFound = wishlist.findIndex(
      (product) => product.image === selectedImage
    );
    const selectedProduct = products.find(
      (product) => product.image === selectedImage
    );

    if (isFound === -1) {
      setWishlist([...wishlist, { ...selectedProduct, quantity: 1 }]);
    }
  };

  const removeFromWishlist = (selectedImage) => {
    setWishlist(
      wishlist.filter((wishlistItem) => wishlistItem.image !== selectedImage)
    );
  };

  const checkInWishlist = (image) => {
    return wishlist.find((cartItem) => cartItem.image === image);
  };

  //   const moveToCart=(selImage)=>{
  //     setWishlist(cart.find(cartItem=> cartItem.image ===selImage)?wishlist.filter(wishlistItem=>wishlistItem.image!==selImage:cart) )
  //   }

  return (
    <WishListContext.Provider
      value={{
        item: 2,
        wishlist,
        addToWishList,
        removeFromWishlist,
        checkInWishlist,
        // moveToCart,
      }}
    >
      {" "}
      {children}
    </WishListContext.Provider>
  );
};
