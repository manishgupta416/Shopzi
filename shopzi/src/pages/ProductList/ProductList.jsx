import React, { useContext} from "react";

import "./ProductList.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { ProductContext } from "../../context/ProductContext";

const ProductList = () => {
  const {products} = useContext(ProductContext)
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="filter-container" id="scrollbar">
          <div className="filter-header">
            <h4>Filter</h4>
            <p>Clear</p>
          </div>
          {/*  */}
          <div className="filter-price">
            <h4>Price</h4>

            <div className="filter-range">
              {" "}
              <p>0</p>
              <p>150</p>
              <p>200</p>
            </div>
            <input type="range" />
          </div>
          {/*  */}
          <div className="filter-category">
            <h4>Category</h4>
            <div className="filter-checkbox">
              <label className="input-checkbox" htmlFor="input-checkbox">
                <input type="checkbox" />
                <span>Men</span>
              </label>
              <label className="input-checkbox" htmlFor="input-checkbox">
                <input type="checkbox" />
                <span>Women</span>{" "}
              </label>
              <label className="input-checkbox" htmlFor="input-checkbox">
                <input type="checkbox" />
                <span>Electronics</span>{" "}
              </label>
              <label className="input-checkbox" htmlFor="input-checkbox">
                <input type="checkbox" />
                <span>Home Appliances</span>{" "}
              </label>
            </div>
          </div>
          {/*  */}

          <div className="filter-rating">
            <h4>Rating</h4>
            <div className="filter-rating-options">
              <label className="input-rating" htmlFor="rating">
                <input type="radio" name="sort-by-rating" />
                <span>4.5 and above</span>
              </label>
              <label className="input-rating" htmlFor="rating">
                <input type="radio" name="sort-by-rating" />
                <span>4.0 and above</span>
              </label>
              <label className="input-rating" htmlFor="rating">
                <input type="radio" name="sort-by-rating" />
                <span>3.5 and above</span>
              </label>
              <label className="input-rating" htmlFor="rating">
                <input type="radio" name="sort-by-rating" />
                <span>3.0 and above</span>
              </label>
            </div>
          </div>
          {/*  */}
          <div className="filter-sort">
            <h4>Sort</h4>
            <div className="sort-options">
              <label className="input-sort" htmlFor="sort-price">
                <input type="radio" name="sort-by-price" />
                <span>low to high price</span>
              </label>
              <label className="input-sort" htmlFor="sort-price">
                <input type="radio" name="sort-by-price" />
                <span>high to low price</span>
              </label>
            </div>
          </div>
        </div>

        <div className="product-container">
          <div className="product-heading">
            <h3>Showing All Products</h3>
            <span>(Showing {products.length} Products out of {products.length} products)</span>
          </div>
          <div className="product-lists">
            {products.map(
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
                discount
              }) => (
                <div className="product-card">
        <div>
          <img className="product-card-image" src={image} alt="" />
          <span className="product-card-wishlist card-button"><i class="fa-regular fa-heart fa-xl" style={{color: "#ff6347"}}></i></span>
          <div className="rns">
          <span><i class="fa-regular fa-star" style={{color: "#ff6347"}} ></i></span>
          <span className="rating">{rating}</span>
          <p className="">{review}</p>
          <span className="size ">{size}</span>
        </div>
        </div>
        
       
        <div className="product-card-content">
          <div className="product-card-title">
            <h4>{title}</h4>
          </div>
          <div className="product-card-price">
            <p>{price}</p>
            <p className="o-price">{original_price}</p>
            {/* <p className="discount">{discount}</p> */}
          </div>
          <div className="product-card-button">
            <button className="product-button">Add to cart</button>
          </div>
        </div>
      </div>
              )
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ProductList;
