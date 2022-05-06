import React from "react";

function ProductCard({ ele }) {
  return (
    <div className="product_card">
      <img src={ele.image} alt="Avatar" />
      <div className="h4">
        <h4>
          <b>Fresh {ele.name}</b>
        </h4>
      </div>

      <div className="product_price">
        <h6>
          <b>{ele.price} Rs. for 1 kg</b>
        </h6>
        <div class="col-sm-5">
          <button
            type="button"
            class="btn btn-xs btn-toggle"
            data-toggle="button"
            aria-pressed="false"
            autocomplete="off"
          >
            <div class="handle"></div>
          </button>
        </div>
      </div>
      <br></br>
      <div className="product_edit">
        <button>EDIT</button>
      </div>
    </div>
  );
}

export default ProductCard;
