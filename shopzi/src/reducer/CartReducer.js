export const CartReducer = (state, action) => {
  switch (action.type) {
    case "getCartItems":
      return { ...state, cart: action.payload };

    case "addProductToCart":
      console.log(action.payload);
      return { ...state, cart: action.payload };

    case "removeFromcart":
      return { ...state, cart: action.payload };

    case "updateCartQnty":
      return { ...state, cart: action.payload };

    default:
      return { ...state };
  }
};

export const initialCartState = { cart: [] };
