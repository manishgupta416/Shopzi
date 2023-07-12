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

    case "addToOrderedItem":
      // console.log("ac", action.payload);
      return {
        ...state,
        orderedItems: [...action.payload],
      };

    case "clearCart":
      return {
        ...state,
        cart: state.cart.filter(
          (item) => !action.payload.find((orderItem) => orderItem === item)
        ),
      };

    default:
      return { ...state };
  }
};

export const initialCartState = { cart: [], orderedItems: [] };
