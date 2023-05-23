import React, { useContext } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Loader from "../../components/Loader/Loader";
import "./Home.css";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { ProductContext } from "../../context/ProductContext";

const Home = () => {
  const { categories, state, dispatch } = useContext(ProductContext);
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      {/* <Loader/> */}
      <div className="category-container">
        {categories.map(({ categoryName, description, img, _id }) => (
          <div className="category-card" key={_id} value={categoryName}>
            {" "}
            <div className="card-title">{categoryName}</div>
            <img
              onClick={(e) => {
                dispatch({ type: "category", payload: [categoryName] });
                navigate("/productlist-page");
              }}
              className="card-img"
              src={img}
              alt={categoryName}
            />
          </div>
        ))}
      </div>

      <div>
        <img
          className="discount-img"
          src="https://sslimages.shoppersstop.com/sys-master/root/h9f/h64/29791188254750/Store-to-Explore--strips-web_strip_120423.jpg"
          alt=""
        />
      </div>

      <div
        className="sales-container"
        onClick={(e) => {
          dispatch({ type: "category", payload: ["Men", "Women", "Kids"] });
          navigate("/productlist-page");
        }}
      >
        <img
          className="sales-img"
          src="https://sslimages.shoppersstop.com/sys-master/root/h39/hf6/29839254323230/Static-Web-spaykar--Mix-Cat%28500-px%29---2023-04-18--home-page-first-time-on-discount_.jpg"
          alt=""
        />
      </div>

      <div>
        <img
          className="discount-img"
          src="https://sslimages.shoppersstop.com/sys-master/root/hc2/h9c/29476916133918/Everything-under-Budget--strips-web--2023-027bar.jpg"
          alt=""
        />
      </div>

      <div className="arrival-container">
        <div
          className="fashion-new-arrivals arrival-card"
          onClick={(e) => {
            dispatch({ type: "category", payload: ["Men", "Women"] });
            navigate("/productlist-page");
          }}
        >
          <div className="arrival-img">
            <img
              className="arrival-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlCfOzrP6csPaHhFYFT2FlT7AmP8hoS81AYA&usqp=CAU"
              alt=""
            />
          </div>
          <div className="arrival-content">
            <div className="content-heading">NEW ARRIVAL</div>
            <div className="content-txt">
              <div className="context-footer-heading">
                <h1>New Collection</h1>
              </div>{" "}
              <div className="context-desc">
                Checkout all new latest fashion collections
              </div>
            </div>
          </div>
        </div>

        <div
          className="electronics-new-arr arrival-card"
          onClick={(e) => {
            dispatch({ type: "category", payload: ["Electronics", "Mobiles"] });
            navigate("/productlist-page");
          }}
        >
          <div className="arrival-img">
            <img
              className="arrival-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxX1LebjtW7Q6fWz0XmZSp-CtqsYEiNeHQgA&usqp=CAU"
              alt=""
            />
          </div>
          <div className="arrival-content">
            <div className="content-heading">NEW ARRIVAL</div>
            <div className="content-txt">
              <div className="context-footer-heading">
                <h1>Latest launches</h1>
              </div>{" "}
              <div className="context-desc">
                Checkout all new upcoming and latest gadgets
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
