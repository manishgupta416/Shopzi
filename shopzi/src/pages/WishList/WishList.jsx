import React, { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./WishList.css";
import { WishListContext } from "../../context/WishListContext";
import { CartContext } from "../../context/CartContext";
import { products } from "../../backend/db/products";

const WishList = () => {
  const { wishlistState, removeFromWishlist, moveToCart } =
    useContext(WishListContext);
  //   const { addToCart } = useContext(CartContext);
  return (
    <>
      <Navbar />

      <div className="main-container">
        <h2>My WishList Items</h2>
        <div className="product-list">
          {wishlistState.wishlist?.map((product) => {
            const {
              _id,
              title,
              image,
              rating,
              size,
              price,
              original_price,
              in_stock,
              review,
              discount,
              quantity,
            } = product;
            return (
              <div className="wishlist-card">
                <div className="img-container">
                  <img className="cart-img" src={image} alt="img" />
                </div>
                <div className="wishlist-contents">
                  <div className="product-details">
                    <div className="product-heading">
                      <h3>{title}</h3>
                    </div>
                    <div className="product-price">
                      <h4>₹{price}</h4>{" "}
                      <h5
                        style={{
                          textDecoration: "line-through",
                          color: "gray",
                        }}
                      >
                        ₹{original_price}
                      </h5>
                    </div>
                    <div className="product-offer">{discount}% OFF</div>
                  </div>
                  <div className="product-buttons">
                    <button
                      className="cart-button"
                      onClick={() => removeFromWishlist(_id)}
                    >
                      Remove From WishList{" "}
                    </button>
                    <button
                      className="cart-button"
                      onClick={() => moveToCart(product)}
                    >
                      Move to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WishList;
