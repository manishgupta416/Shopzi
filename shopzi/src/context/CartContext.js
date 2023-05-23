import { createContext, useContext, useState } from "react";
import { ProductContext } from "./ProductContext";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { state, dispatch, products } = useContext(ProductContext);

  const checkInCart = (image) => {
    return cart.find((cartItem) => cartItem.image === image);
  };

  const addToCart = (productImage) => {
    const isFound = cart.findIndex((product) => product.image === productImage);
    const selectedProduct = products.find(
      (product) => product.image === productImage
    );

    if (isFound === -1) {
      setCart([...cart, selectedProduct]);
      // } else {
      //   setCart(
      //     cart.map((cartItem) =>
      //       cartItem._id === productId
      //         ? {
      //             ...cartItem,
      //             quantity: "undefined" ? 1 : cartItem.quantity + 1,
      //           }
      //         : cartItem
      //     )
      //   );
    }
    // console.log(selectedProduct);
    console.log(cart);
  };

  const totalPrice = cart.reduce(
    (acc, curr) => Number(acc) + Number(curr.price),
    0
  );

  const discountPrice = cart.reduce(
    (acc, curr) =>
      Number(acc) +
      Number(curr.price) -
      (
        Number(curr.price) * Number((Number(curr.discount) / 100).toFixed(2))
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
        cart,
        totalPrice,
        discountPrice,
        TotalFinalPrice,
      }}
    >
      {" "}
      {children}
    </CartContext.Provider>
  );
};
