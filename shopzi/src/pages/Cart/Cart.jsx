import React, { useContext, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";
const Cart = () => {
  const {
    cart,
    totalPrice,
    discountPrice,
    TotalFinalPrice,
    incQuantity,
    decQuantity,
    removeFromCart,
  } = useContext(CartContext);
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="cart">
          <div className="cart-heading">
            <h2>My Carts Items</h2>
          </div>

          <div className="cart contents">
            <div className="cart-container">
              <div className="product-list">
                {cart.map(
                  ({
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
                  }) => (
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
                            onClick={() => incQuantity(image)}
                          >
                            +
                          </button>
                          <p> {quantity} </p>
                          <button
                            className="dec"
                            onClick={() => decQuantity(image)}
                            disabled={quantity === 1}
                            style={{
                              backgroundColor: quantity === 1 ? "gray" : "",
                            }}
                          >
                            -
                          </button>
                        </div>
                        <div className="product-buttons">
                          <button
                            className="cart-button"
                            onClick={() => removeFromCart(image)}
                          >
                            Remove from cart{" "}
                          </button>
                          <button className="cart-button">
                            Move to wishlist
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>

              {cart.length > 0 && (
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
                      <p>Price ({cart.length}items): </p>
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
