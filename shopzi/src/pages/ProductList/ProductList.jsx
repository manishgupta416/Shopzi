import React, { useContext } from "react";

import "./ProductList.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { ProductContext } from "../../context/ProductContext";

const ProductList = () => {
  const {
    products,
    searchProduct,
    state,
    dispatch,
    checkboxProductData,
    ratingFilteredData,
    sortFilteredData,
    rangeFilteredProducts,
    otherFiltersData
  } = useContext(ProductContext);
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="filter-container" id="scrollbar">
          <div className="filter-header">
            <h4>Filter</h4>
            <p
              className="clear-filter"
              onClick={() => dispatch({ type: "clearFilter" })}
            >
              Clear 
            </p>
          </div>
          {/*  */}
          <div className="filter-price">
            <h4>Price</h4>

            <div className="filter-range">
              {" "}
              <p>0</p>
              <p>50000</p>
              <p>111111</p>
            </div>
            <input
              type="range"
              onChange={(e) =>
                dispatch({ type: "range", payload: Number(e.target.value) })
              }
              value={state.range}
              min={0}
              max={111111}
            />
          </div>
          {/*  */}
          <div className="filter-category">
            <h4>Category</h4>
            <div className="filter-checkbox">
              <label className="input-checkbox" htmlFor="input-checkbox">
                <input
                  type="checkbox"
                  checked={state.checkbox.includes("Men")}
                  onChange={(e) =>
                    dispatch({
                      type: "checkbox",
                      payload: {
                        checked: e.target.checked,
                        value: e.target.value,
                      },
                    })
                  }
                  value={"Men"}
                />
                <span>Men</span>
              </label>
              <label className="input-checkbox" htmlFor="input-checkbox">
                <input
                  type="checkbox"
                  checked={state.checkbox.includes("Women")}
                  onChange={(e) =>
                    dispatch({
                      type: "checkbox",
                      payload: {
                        checked: e.target.checked,
                        value: e.target.value,
                      },
                    })
                  }
                  value={"Women"}
                />
                <span>Women</span>{" "}
              </label>

              <label className="input-checkbox" htmlFor="input-checkbox">
                <input
                  type="checkbox"
                  checked={state.checkbox.includes("Kids")}
                  onChange={(e) =>
                    dispatch({
                      type: "checkbox",
                      payload: {
                        checked: e.target.checked,
                        value: e.target.value,
                      },
                    })
                  }
                  value={"Kids"}
                />
                <span>Kids</span>{" "}
              </label>

              <label className="input-checkbox" htmlFor="input-checkbox">
                <input
                  type="checkbox"
                  checked={state.checkbox.includes("Electronics")}
                  onChange={(e) =>
                    dispatch({
                      type: "checkbox",
                      payload: {
                        checked: e.target.checked,
                        value: e.target.value,
                      },
                    })
                  }
                  value={"Electronics"}
                />
                <span>Electronics</span>{" "}
              </label>

              <label className="input-checkbox" htmlFor="input-checkbox">
                <input
                  type="checkbox"
                  checked={state.checkbox.includes("Mobiles")}
                  onChange={(e) =>
                    dispatch({
                      type: "checkbox",
                      payload: {
                        checked: e.target.checked,
                        value: e.target.value,
                      },
                    })
                  }
                  value={"Mobiles"}
                />
                <span>Mobiles</span>{" "}
              </label>

              <label className="input-checkbox" htmlFor="input-checkbox">
                <input
                  type="checkbox"
                  checked={state.checkbox.includes("Home Appliances")}
                  onChange={(e) =>
                    dispatch({
                      type: "checkbox",
                      payload: {
                        checked: e.target.checked,
                        value: e.target.value,
                      },
                    })
                  }
                  value={"Home Appliances"}
                />
                <span>Home Appliances</span>{" "}
              </label>
            </div>
          </div>
          {/*  */}

          <div className="filter-rating">
            <h4>Rating</h4>
            <div className="filter-rating-options">
              <label className="input-rating" htmlFor="rating">
                <input
                  type="radio"
                  name="sort-by-rating"
                  onChange={(e) =>
                    dispatch({ type: "rating", payload: e.target.value })
                  }
                  // checked={state.rating===4.5}
                  value={4.5}
                />
                <span>4.5 and above</span>
              </label>
              <label className="input-rating" htmlFor="rating">
                <input
                  type="radio"
                  name="sort-by-rating"
                  // checked={state.rating===4.0}
                  onChange={(e) =>
                    dispatch({ type: "rating", payload: e.target.value })
                  }
                  value={4.0}
                />
                <span>4.0 and above</span>
              </label>
              <label className="input-rating" htmlFor="rating">
                <input
                  type="radio"
                  name="sort-by-rating"
                  // checked={state.rating===3.5}
                  onChange={(e) =>
                    dispatch({ type: "rating", payload: e.target.value })
                  }
                  value={3.5}
                />
                <span>3.5 and above</span>
              </label>
              <label className="input-rating" htmlFor="rating">
                <input
                  type="radio"
                  name="sort-by-rating"
                  // checked={state.rating===3.0}
                  onChange={(e) =>
                    dispatch({ type: "rating", payload: e.target.value })
                  }
                  value={3.0}
                />
                <span>3.0 and above</span>
              </label>
            </div>
          </div>
          {/*  */}
          <div className="filter-sort">
            <h4>Sort</h4>
            <div className="sort-options">
              <label className="input-sort" htmlFor="sort-price">
                <input
                  type="radio"
                  name="sort-by-price"
                  // checked={state.rating==="lTh"}
                  onChange={(e) =>
                    dispatch({ type: "sort", payload: e.target.value })
                  }
                  value={"lTh"}
                />
                <span>low to high price</span>
              </label>
              <label className="input-sort" htmlFor="sort-price">
                <input
                  type="radio"
                  name="sort-by-price"
                  // checked={state.rating!=="hTl"}
                  onChange={(e) =>
                    dispatch({ type: "sort", payload: e.target.value })
                  }
                  value={"hTl"}
                />
                <span>high to low price</span>
              </label>
            </div>
          </div>
          {/*
           */}
          <div className="filter-category">
            <h4>Others Filters</h4>
            <div className="filter-checkbox">
              <label className="input-checkbox" htmlFor="input-checkbox">
                <input
                  type="checkbox"
                  checked={state.otherCheckboxFilters.includes("inStock")}
                  onChange={(e) =>
                    dispatch({
                      type: "otherFilters",
                      payload: {
                        checked: e.target.checked,
                        value: e.target.value,
                      },
                    })
                  }
                  value={"inStock"}
                  
                />
                <span>Include Out of Stock</span>
              </label>

              <label className="input-checkbox" htmlFor="input-checkbox">
                <input
                  type="checkbox"
                  checked={state.otherCheckboxFilters.includes("fastDelivery")}
                  onChange={(e) =>
                    dispatch({
                      type: "otherFilters",
                      payload: {
                        checked: e.target.checked,
                        value: e.target.value,
                      },
                    })
                  }
                  
                  value={"fastDelivery"}
                />
                <span>Fast Delivery Only</span>
              </label>
            </div>
          </div>
        </div>

        <div className="product-container">
          <div className="product-heading">
            <h3>Showing All Products</h3>
            <span>
              (Showing {otherFiltersData.length} Products out of{" "}
              {otherFiltersData.length} products)
            </span>
          </div>
          <div className="product-lists">
            {otherFiltersData.map(
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
              }) => (
                <div className="product-card" key={_id}>
                  <div key={_id}>
                    <img className="product-card-image" src={image} alt="" />
                    <span className="product-card-wishlist card-button">
                      <i
                        class="fa-regular fa-heart fa-xl"
                        style={{ color: "#ff6347" }}
                      ></i>
                    </span>
                    <div className="rns">
                      <span>
                        <i
                          class="fa-regular fa-star"
                          style={{ color: "#ff6347" }}
                        ></i>
                      </span>
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
                      <p>₹{price}</p>
                      <p className="o-price">₹{original_price}</p>
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
      <Footer />
    </>
  );
};

export default ProductList;
