export const WishlistReducer = (state, action) => {
  switch (action.type) {
    case "getWishlistItems":
      return { ...state, wishlist: action.payload };

    case "addProductToWishlist":
      console.log(action.payload);
      return { ...state, wishlist: action.payload };

    case "removeFromWishlist":
      return { ...state, wishlist: action.payload };

    default:
      return { ...state };
  }
};
export const initialWishlistState = { wishlist: [] };
