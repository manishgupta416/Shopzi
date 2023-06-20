import React, { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { ProductContext } from "../../context/ProductContext";
import Navbar from "../../components/Navbar/Navbar";

const ProductDetails = () => {
  const { products } = useContext(ProductContext);
  const { selectedId } = useParams();
  const selectedProduct = products.find(({ _id }) => _id === selectedId);
  console.log(selectedProduct);
  return (
    <div>
      <Navbar />
      <div className="product-details-container">
        <div>
          <img
            src={selectedProduct?.image}
            className="product-card-image img-single"
            alt=""
          />
        </div>

        <div className="product-details">
          <h2 className="product-name">{selectedProduct?.title}</h2>
          <div className="product-desc">{selectedProduct?.description}</div>

          <div className="item-row">
            <strong className="product-price">₹{selectedProduct?.price}</strong>
            <div className="product-original_price o-price">
              ₹ {selectedProduct?.original_price}
            </div>
          </div>
          <div className="item-row">
            <div className="product-rating">
              <i
                class="fa-sharp fa-solid fa-star"
                style={{ color: " #ff6347" }}
              ></i>
              {selectedProduct?.rating}
            </div>
            <div className="product-review">{selectedProduct?.reviews}</div>
          </div>
          <div className="item-row">
            {selectedProduct?.inStock === true ? (
              <div className="product-in_stock">In Stock</div>
            ) : (
              <strong className="product-in_stock">Out of Stock</strong>
            )}

            <div className="product-discount">
              {selectedProduct?.discount}% OFF
            </div>
          </div>

          <div className="product-card-button btn-row">
            <button
              className="product-button"
              onClick={() => {
                //   loginToken
                //     ? checkInCart(_id)
                //       ? navigate("/cart")
                //       : addToCart(product)
                //     : navigate("/sign-in");
              }}
            >
              Add to Wishlist
            </button>
            <button
              className="product-button "
              onClick={() => {
                //   loginToken
                //     ? checkInCart(_id)
                //       ? navigate("/cart")
                //       : addToCart(product)
                //     : navigate("/sign-in");
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
