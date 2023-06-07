import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./ProductList.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { ProductContext } from "../../context/ProductContext";
import { CartContext } from "../../context/CartContext";
import { WishListContext } from "../../context/WishListContext";

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
    otherFiltersData,
  } = useContext(ProductContext);
  const navigate = useNavigate();

  const { addToCart, checkInCart } = useContext(CartContext);
  const { addToWishList, checkInWishlist, removeFromWishlist } =
    useContext(WishListContext);
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
              <label className="input-checkbox" htmlFor="Men">
                <input
                  type="checkbox"
                  id="Men"
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
              <label className="input-checkbox" htmlFor="Women">
                <input
                  type="checkbox"
                  id="Women"
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

              <label className="input-checkbox" htmlFor="Kids">
                <input
                  type="checkbox"
                  id="Kids"
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

              <label className="input-checkbox" htmlFor="Electronics">
                <input
                  type="checkbox"
                  id="Electronics"
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

              <label className="input-checkbox" htmlFor="Mobiles">
                <input
                  type="checkbox"
                  id="Mobiles"
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

              <label className="input-checkbox" htmlFor="Home Appliances">
                <input
                  type="checkbox"
                  id="Home Appliances"
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
              <label className="input-rating" htmlFor="4.5">
                <input
                  type="radio"
                  id="4.5"
                  name="sort-by-rating"
                  onChange={(e) =>
                    dispatch({ type: "rating", payload: e.target.value })
                  }
                  checked={state.rating === "4.5"}
                  value={4.5}
                />
                <span>4.5 and above</span>
              </label>
              <label className="input-rating" htmlFor="4.0">
                <input
                  type="radio"
                  id="4.0"
                  name="sort-by-rating"
                  checked={state.rating === "4"}
                  onChange={(e) =>
                    dispatch({ type: "rating", payload: e.target.value })
                  }
                  value={4.0}
                />
                <span>4.0 and above</span>
              </label>
              <label className="input-rating" htmlFor="3.5">
                <input
                  type="radio"
                  id="3.5"
                  name="sort-by-rating"
                  checked={state.rating === "3.5"}
                  onChange={(e) =>
                    dispatch({ type: "rating", payload: e.target.value })
                  }
                  value={3.5}
                />
                <span>3.5 and above</span>
              </label>
              <label className="input-rating" htmlFor="3.0">
                <input
                  type="radio"
                  id="3.0"
                  name="sort-by-rating"
                  checked={state.rating === "3"}
                  onChange={(e) =>
                    dispatch({ type: "rating", payload: e.target.value })
                  }
                  value={3.0}
                />
                <span>3.0 and above</span>
              </label>
              <label className="input-rating" htmlFor="1.0">
                <input
                  type="radio"
                  id="1.0"
                  name="sort-by-rating"
                  checked={state.rating === "1"}
                  onChange={(e) =>
                    dispatch({ type: "rating", payload: e.target.value })
                  }
                  value={1.0}
                />
                <span>1.0 and above</span>
              </label>
            </div>
          </div>
          {/*  */}
          <div className="filter-sort">
            <h4>Sort</h4>
            <div className="sort-options">
              <label className="input-sort" htmlFor="lTh">
                <input
                  type="radio"
                  id="lTh"
                  name="sort-by-price"
                  checked={state.sort === "lTh"}
                  onChange={(e) =>
                    dispatch({ type: "sort", payload: e.target.value })
                  }
                  value={"lTh"}
                />
                <span>low to high price</span>
              </label>
              <label className="input-sort" htmlFor="hTl">
                <input
                  type="radio"
                  id="hTl"
                  name="sort-by-price"
                  checked={state.sort === "hTl"}
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
              <label className="input-checkbox" htmlFor="inStock">
                <input
                  type="checkbox"
                  id="inStock"
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

              <label className="input-checkbox" htmlFor="fastDelivery">
                <input
                  type="checkbox"
                  id="fastDelivery"
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
            {otherFiltersData.map((product) => {
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
              } = product;
              return (
                <div className="product-card" key={_id}>
                  <div key={_id}>
                    <img className="product-card-image" src={image} alt="" />
                    <span className="product-card-wishlist card-button">
                      {checkInWishlist(_id) ? (
                        <i
                          onClick={() => removeFromWishlist(_id)}
                          class="fa-solid fa-heart fa-xl"
                          style={{ color: "#ff6347" }}
                        ></i>
                      ) : (
                        <i
                          onClick={() => addToWishList(product)}
                          class="fa-regular fa-heart fa-xl"
                          style={{ color: "#ff6347" }}
                        ></i>
                      )}
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
                      <button
                        className="product-button"
                        onClick={() =>
                          checkInCart(_id)
                            ? navigate("/cart")
                            : addToCart(product)
                        }
                      >
                        {checkInCart(_id) ? "Go to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
