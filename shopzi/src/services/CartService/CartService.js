import axios from "axios";

export const GetCartItems = async (loginToken) => {
  await axios.get("/api/user/cart", {
    headers: { authorization: loginToken },
  });
};

// export const AddToCart = async (product, loginToken) => {
//   axios.post("/api/user/cart", {
//     product: { product },
//     headers: {
//       authorization: loginToken,
//     },
//   });
// };

export const RemoveFromCart = async (productId, loginToken) => {
  axios.delete(`/api/user/cart/${productId}`, {
    headers: {
      authorization: loginToken,
    },
  });
};

export const updateCartQnty = async (productId, loginToken, actionType) => {
  axios.post(`/api/user/cart/${productId}`, {
    action: {
      type: actionType,
    },
    headers: {
      authorization: loginToken,
    },
  });
};
