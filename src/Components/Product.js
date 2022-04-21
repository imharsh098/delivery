import React from "react";
import ProductCard from "./ProductCard.js";
import "./img/carrot.jpg";

function Product() {
  const products = [
    {
      name: "Carrot",
      price: "$4",
      image: "./img/carrot.jpg",
    },
    {
      name: "Tomato",
      price: "$4",
      image: "./img/tomato.jpg",
    },
    {
      name: "Onions",
      price: "$4",
      image: "./img/onions.jpg",
    },
    {
      name: "Potato",
      price: "$4",
      image: "./img/potato.jpg",
    },
    {
      name: "Brinjal",
      price: "$4",
      image: "./img/brinjal.jpg",
    },
    {
      name: "Raddish",
      price: "$4",
      image: "./img/raddish.jpg",
    },
  ];

  return (
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
          <button
            type="button"
            class="btn"
            data-toggle="modal"
            data-target="#exampleModalLong"
          ></button>
          <img
            src="./img/potato.jpg"
            alt="Avatar"
            style={{ borderRadius: "18px 18px 0px 0px" }}
          />
          <div className="h4">
            <h4>
              <b>Fresh </b>
            </h4>
          </div>

          <div className="product_price">
            <h4>
              <b>Price</b>
            </h4>
            <h4>
              <b>/kg</b>
            </h4>
          </div>
          <div className="product_edit">
            <button>EDIT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;