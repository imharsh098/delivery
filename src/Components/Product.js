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

  // const products = [
  //   {
  //     name: "Carrot",
  //     price: "$4",
  //     image: "./img/carrot.jpg",
  //   },
  //   {
  //     name: "Tomato",
  //     price: "$4",
  //     image: "./img/tomato.jpg",
  //   },
  //   {
  //     name: "Onions",
  //     price: "$4",
  //     image: "./img/onions.jpg",
  //   },
  //   {
  //     name: "Potato",
  //     price: "$4",
  //     image: "./img/potato.jpg",
  //   },
  //   {
  //     name: "Brinjal",
  //     price: "$4",
  //     image: "./img/brinjal.jpg",
  //   },
  //   {
  //     name: "Raddish",
  //     price: "$4",
  //     image: "./img/raddish.jpg",
  //   },
  // ];
  // **************************************
  // Change products to product in the map
  // **************************************

  return (
    <div>
      <TopNav />
      <div className="main">
        <SideNav />
        <div className="dashboard">
          <div className="product_nav" style={{ backgroundColor: "#04aa6dd4" }}>
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
              return <ProductCard ele={ele} />;
            })}
            <div className="product_card">
              <div className="product_edit">
                <Link
                  class="active"
                  to="/productModal"
                  data-toggle="modal"
                  data-target="#exampleModalLong"
                >
                  <span className="links-name">Add New Product</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
