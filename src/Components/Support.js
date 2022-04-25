import { React, useState } from "react";
import TopNav from "./TopNav";
import SideNav from "./sideNav";

function Support() {
  const [help, setHelp] = useState({
    number: "",
    message: "",
  });
  const helper = (e) => {
    setHelp({ ...help, [e.target.id]: e.target.value });
  };
  const handleSupport = async (e) => {
    e.preventDefault();
    // dispatch(loginAction(log.email, log.password));
  };
  return (
    <div>
      <TopNav />
      <div className="main">
        <SideNav />
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
                  Write us your queries
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
                <form onSubmit={handleSupport}>
                  <div className="form-group">
                    <label for="">
                      <i className="fa-2x fa-bold fa-mobile-screen-button"></i>
                      Mobile Number:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="number"
                      value={help.number}
                      onChange={helper}
                    />
                  </div>
                  <div className="form-group">
                    <label for="">
                      <i className="fa-2x fa-solid fa-message-pen"></i>
                      <p style={{ fontSize: "large" }}>Your Message:</p>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="message"
                      value={help.message}
                      onChange={helper}
                    />
                  </div>
                </form>
              </div>
              <button type="Submit" className="support_btn">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
