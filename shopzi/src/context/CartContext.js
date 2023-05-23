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
      setCart([...cart, { ...selectedProduct, quantity: 1 }]);
      // } else {
      //   setCart(
      //     cart.map((cartItem) =>
      //       cartItem.image === productImage
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
    (acc, curr) =>
      (Number(acc) + Number(curr.price) * curr.quantity).toFixed(2),
    0
  );

  const discountPrice = cart.reduce(
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

  const incQuantity = (selectedId) =>
    setCart(
      cart.map((cartItem) =>
        cartItem.image === selectedId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );

  const decQuantity = (selectedId) =>
    setCart(
      cart.map((cartItem) =>
        cartItem.image === selectedId
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  console.log(incQuantity);
  const TotalFinalPrice = totalPrice - discountPrice;

  const removeFromCart = (selectedImage) => {
    setCart(cart.filter((cartItem) => cartItem.image !== selectedImage));
  };
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
        incQuantity,
        decQuantity,
        removeFromCart,
      }}
    >
      {" "}
      {children}
    </CartContext.Provider>
  );
};
