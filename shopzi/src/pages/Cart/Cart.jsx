import React, { useContext, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";
import { WishListContext } from "../../context/WishListContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const Cart = () => {
  const {
    cartState,
    totalPrice,
    discountPrice,
    TotalFinalPrice,
    updateCartQnty,
    removeFromCart,
  } = useContext(CartContext);
  // console.log(cartState.cart);
  const navigate = useNavigate();
  const { checkInWishlist, moveTowishlist, addToWishList } =
    useContext(WishListContext);
  const { loginToken } = useContext(AuthContext);

  const handleAddToWishlist = (selcId, product) => {
    if (loginToken) {
      const productInCart = checkInWishlist(selcId);
      if (!productInCart) {
        addToWishList(product);
        removeFromCart(selcId);
      }
      navigate("/wishlist");
    } else {
      navigate("/sign-in");
    }
  };
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="cart">
          <div className="cart-heading">
            <h2>My Cart Items</h2>
          </div>

          <div className="cart contents">
            <div className="cart-container">
              <div className="product-list">
                {cartState.cart.map((product) => {
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
                    qty,
                  } = product;
                  return (
                    <div className="cart-card">
                      <div className="img-container">
                        <img className="cart-img" src={image} alt="img" />
                      </div>
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
                        <div className="product-quantity">
                          <p>Quantity : </p>
                          <button
                            className="inc"
                            onClick={() => updateCartQnty(_id, "increment")}
                          >
                            +
                          </button>
                          <p> {qty} </p>
                          <button
                            className="dec"
                            onClick={() => updateCartQnty(_id, "decrement")}
                            disabled={qty === 1}
                            style={{
                              backgroundColor: qty === 1 ? "gray" : "",
                            }}
                          >
                            -
                          </button>
                        </div>
                        <div className="product-buttons">
                          <button
                            className="cart-button"
                            onClick={() => removeFromCart(_id)}
                          >
                            Remove from cart{" "}
                          </button>
                          <button
                            className="cart-button"
                            onClick={() => handleAddToWishlist(_id, product)}
                          >
                            {checkInWishlist(_id)
                              ? "Already In Wishlist"
                              : "Move to wishlist"}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {cartState.cart.length > 0 && (
                <div className="price-card">
                  <div className="price-items ">
                    <div className="price">
                      <h1>Price Details </h1>
                    </div>{" "}
                  </div>
                  <div className="hr">
                    <hr />
                  </div>
                  <div className="price-items">
                    <div className="product-price row-items">
                      <p>Price ({cartState.cart.length}items): </p>
                      <h3>₹{totalPrice}</h3>
                    </div>
                  </div>
                  <div className="price-items">
                    <div className="discount-price row-items">
                      <p>Discount</p>
                      <h3>₹{discountPrice}</h3>
                    </div>
                  </div>
                  <div className="price-items">
                    <div className="delivery-charges row-items">
                      <p>Delivery charges</p>
                      <h3>Free</h3>
                    </div>
                  </div>
                  <div className="price-items">
                    <div className="total-price row-items">
                      <p>Total price</p>
                      <h3>₹{TotalFinalPrice}</h3>{" "}
                    </div>
                  </div>
                  <div className="hr">
                    <hr />
                  </div>
                  <div className="price-items">
                    <p>
                      You will save <b>₹{discountPrice}</b> on this order
                    </p>
                  </div>
                  <button
                    onClick={() => navigate("/checkout")}
                    className="cart-button"
                  >
                    CheckOut
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
