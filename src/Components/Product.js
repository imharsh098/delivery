import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listproducts, addProduct } from "../actions/productActions";
import ProductCard from "./ProductCard.js";
import TopNav from "./TopNav";
import SideNav from "./sideNav";
import "./img/carrot.jpg";

function Product() {
  const productData = useSelector((state) => state.productData);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const { products } = productData;
  const history = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!userInfo) {
      history("/");
    }
    if (userInfo) {
      dispatch(listproducts());
    }
  }, []);

  return (
    <div>
      <TopNav />
      <div className="main">
        <SideNav />
        <div className="dashboard">
          <div className="product_nav" style={{ backgroundColor: "limegreen" }}>
            <ul className="product_ul">
              <li>
                <a href="#" style={{ color: "white" }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "white" }}>
                  News
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "white" }}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "white" }}>
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="product_cards">
            {products.map((ele) => {
              return <ProductCard ele={ele} key={ele._id} />;
            })}
            <button
              style={{
                width: "30%",
                height: "10%",
                borderRadius: "50px",
                color: "white",
                backgroundColor: "green",
                marginTop: "18%",
              }}
            >
              <Link
                className="active"
                to="/productModal"
                data-toggle="modal"
                data-target="#exampleModalLong"
                style={{ color: "white", backgroundColor: "green" }}
              >
                Add New Product
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
