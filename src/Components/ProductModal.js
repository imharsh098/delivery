import React from "react";

function productModal() {
  const [item, setItem] = useState({
    name: "",
    price: "",
    category: "",
  });
  const addProduct = (e) => {
    setItem({ ...help, [e.target.id]: e.target.value });
  };
  const adding = async (e) => {
    e.preventDefault();
    // dispatch(loginAction(log.email, log.password));
  };
  return (
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
            <form onSubmit={adding}>
              <div className="form-group">
                <label for="">
                  <i className="fa-2x fa-bold fa-mobile-screen-button"></i>Item
                  Image
                </label>
                <input type="file" className="form-control" />
              </div>
              <div className="form-group">
                <label for="">
                  <i className="fa-2x fa-bold fa-mobile-screen-button"></i>ITEM
                  NAME
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="name"
                  value={item.name}
                  onChange={addProduct}
                />
              </div>
              <div className="form-group">
                <label for="">
                  <i className="fa-2x fa-solid fa-message-pen"></i>
                  <p style={{ fontSize: large }}>ITEM CATEGORY</p>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="category"
                  value={item.category}
                  onChange={addProduct}
                />
              </div>
              <div className="form-group">
                <label for="">
                  <i className="fa-2x fa-solid fa-message-pen"></i>
                  <p style={{ fontSize: large }}>ITEM PRICE</p>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  value={item.price}
                  onChange={addProduct}
                />
              </div>
            </form>
          </div>
          <button type="Submit" className="btn">
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default productModal;
