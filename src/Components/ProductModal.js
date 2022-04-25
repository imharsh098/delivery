import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TopNav from "./TopNav";
import SideNav from "./sideNav";
import { addProduct } from "../actions/productActions";

function productModal() {
  const productData = useSelector((state) => state.productData);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const { products } = productData;
  const history = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInfo) {
      dispatch(
        addProduct({
          name: item.name,
          image: item.image,
          category: item.category,
          vendorId: item.vendorId,
          price: item.price,
          qty: item.qty,
          unit: item.unit,
        })
      );
    }
  };
  const [item, setItem] = useState({
    name: "",
    image: "",
    category: "",
    vendorId: "",
    price: "",
    qty: "",
    unit: "",
  });
  const adding = (event) => {
    setItem({ ...item, [event.target.id]: event.target.value });
  };
  return (
    <div>
      <TopNav />
      <div className="main">
        <SideNav />
        <div className="dashboard">
          <div
            className="modal fade"
            id="exampleModalLong"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLongTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    Add Product Information
                  </h5>

                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label for="">
                        <i className="fa-2x fa-bold fa-mobile-screen-button"></i>
                        Item Image
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="image"
                        value={item.image}
                        onChange={adding}
                      />
                    </div>
                    <div className="form-group">
                      <label for="">
                        <i className="fa-2x fa-bold fa-mobile-screen-button"></i>
                        ITEM NAME
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="name"
                        value={item.name}
                        onChange={adding}
                      />
                    </div>
                    <div className="form-group">
                      <label for="">
                        <i className="fa-2x fa-solid fa-message-pen"></i>
                        <p style={{ fontSize: "large" }}>ITEM CATEGORY</p>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="category"
                        value={item.category}
                        onChange={adding}
                      />
                    </div>
                    <div className="form-group">
                      <label for="">
                        <i className="fa-2x fa-solid fa-message-pen"></i>
                        <p style={{ fontSize: "large" }}>ITEM PRICE</p>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="price"
                        value={item.price}
                        onChange={adding}
                      />
                    </div>
                    <div className="form-group">
                      <label for="">
                        <i className="fa-2x fa-solid fa-message-pen"></i>
                        <p style={{ fontSize: "large" }}>ITEM PRICE</p>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="qty"
                        value={item.qty}
                        onChange={adding}
                      />
                    </div>
                    <div className="form-group">
                      <label for="">
                        <i className="fa-2x fa-solid fa-message-pen"></i>
                        <p style={{ fontSize: "large" }}>ITEM PRICE</p>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="unit"
                        value={item.unit}
                        onChange={adding}
                      />
                    </div>
                    <button type="Submit" className="btn">
                      Add Product
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default productModal;
