import React from "react";

function ProductCard({ ele }) {
  return (
    <div className="product_card">
      <img
        src={ele.image}
        alt="Avatar"
        style={{ borderRadius: "18px 18px 0px 0px" }}
      />
      <div className="h4">
        <h4>
          <b>Fresh {ele.name}</b>
        </h4>
      </div>

      <div className="product_price">
        <h4>
          <b>Price</b>
        </h4>
        <h4>
          <b>{ele.price}/kg</b>
        </h4>
      </div>
      <div className="product_edit">
        <button>EDIT</button>
      </div>
    </div>
  );
}

export default ProductCard;
