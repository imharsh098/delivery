import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginAction, registerAction } from "../actions/userActions";

function Home() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo: registerInfo } = userRegister;
  // login function
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginAction(log.email, log.password));
  };
  // register function
  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch(
      registerAction({
        storeName: reg.storeName,
        fullName: reg.fullName,
        phoneNo: reg.phoneNo,
        address: {
          city: reg.city,
          country: reg.country,
          state: reg.state,
          zip: reg.zip,
          address1: reg.address1,
          address2: reg.address2,
        },
        services: reg.services,
        categories: reg.categories,
        active: reg.active,
        ownerAadhar: reg.ownerAadhar,
        gst: reg.gst,
        email: reg.emaill,
        liscenseNo: reg.licenseNo,
        ownerPan: reg.ownerPan,
        bankName: reg.bankName,
        accountHolder: reg.accountHolder,
        accountNo: reg.accountNo,
        ifsc: reg.ifsc,
        vendorType: reg.vendorType,
        upiId: reg.upiId,
        storeManager: reg.storeManager,
        whatsappUpdate: reg.whatsappUpdate,
        password: reg.passwordd,
      })
    );
  };

  useEffect(() => {
    if (userInfo) {
      history("/order");
    }
  }, [userLogin]);
  useEffect(() => {
    if (registerInfo) {
      history("/");
    }
  }, [userRegister]);
  const [reg, setReg] = useState({
    storeName: "",
    fullName: "",
    phoneNo: "",
    emaill: "",
    city: "",
    country: "",
    state: "",
    zip: "",
    address1: "",
    address2: "",
    services: "",
    categories: "",
    active: false,
    ownerAadhar: "",
    gst: "",
    licenseNo: "",
    ownerPan: "",
    bankName: "",
    accountHolder: "",
    accountNo: "",
    ifsc: "",
    vendorType: "",
    upiId: "",
    storeManager: "",
    whatsappUpdate: false,
    passwordd: "",
  });
  const [log, setLog] = useState({
    email: "",
    password: "",
  });

  const registration = (e) => {
    setReg({ ...reg, [e.target.id]: e.target.value });
  };
  const loggingIn = (e) => {
    setLog({ ...log, [e.target.id]: e.target.value });
  };
  const redirect = () => {
    history("/order");
  };
  const newdirect = () => {
    history("/");
  };

  return (
    <nav className="Home navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <button
          type="button"
          className="navbar-btn btn btn-sm btn-primary d-none d-lg-inline-block ml-3"
          data-toggle="modal"
          data-target="#login"
        >
          Login
        </button>
        <button
          type="button"
          className="navbar-btn btn btn-sm btn-primary d-none d-lg-inline-block ml-3"
          data-toggle="modal"
          data-target="#register"
        >
          Register
        </button>

        <div
          className="modal fade"
          id="login"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-body">
            <div className="login_all">
              <form onSubmit={handleLogin}>
                <div className="contain">
                  <div style={{ width: "100%" }}>
                    <h2 className="modal-title" id="exampleModalLongTitle">
                      LOGIN
                    </h2>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                      onClick={redirect}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="row100">
                    <div className="coln">
                      <div className="inputBox">
                        <input
                          type="email"
                          name=""
                          required="required"
                          id="email"
                          value={log.email}
                          onChange={loggingIn}
                        />
                        <span className="text">Email</span>
                        <span className="line"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row100">
                    <div className="coln">
                      <div className="inputBox">
                        <input
                          type="password"
                          name=""
                          required="required"
                          id="password"
                          value={log.password}
                          onChange={loggingIn}
                        />
                        <span className="text">Password</span>
                        <span className="line"></span>
                      </div>
                    </div>
                  </div>
                  <br />
                  <button
                    type="submit"
                    className="support_btn"
                    style={{
                      width: "50%",
                      height: "3rem",
                      borderRadius: "20px",
                      fontSize: "1.5rem",
                    }}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="register"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div class="modal-body">
            <div class="login_all">
              <form onSubmit={handleRegister}>
                <div class="contain">
                  <h2 class="modal-title" id="exampleModalLongTitle">
                    Register
                  </h2>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={redirect}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div class="row100">
                    <div class="coln">
                      <div class="inputBox">
                        <input
                          type="text"
                          name=""
                          required="required"
                          id="fullName"
                          value={reg.fullName}
                          onChange={registration}
                        />
                        <span class="text">Full Name</span>
                        <span class="line"></span>
                      </div>
                    </div>
                    <div class="coln">
                      <div class="inputBox">
                        <input
                          type="text"
                          name=""
                          required="required"
                          id="emaill"
                          value={reg.emaill}
                          onChange={registration}
                        />
                        <span class="text">Email</span>
                        <span class="line"></span>
                      </div>
                    </div>
                  </div>
                  <div class="row100">
                    <div class="coln">
                      <div class="inputBox">
                        <input
                          type="password"
                          name=""
                          required="required"
                          id="passwordd"
                          value={reg.passwordd}
                          onChange={registration}
                        />
                        <span class="text">Password</span>
                        <span class="line"></span>
                      </div>
                    </div>
                    <div class="coln">
                      <div class="inputBox">
                        <input
                          type="text"
                          name=""
                          required="required"
                          id="phoneNo"
                          value={reg.phoneNo}
                          onChange={registration}
                        />
                        <span class="text">Phone No.</span>
                        <span class="line"></span>
                      </div>
                    </div>
                  </div>

                  <div class="row100">
                    <div class="coln">
                      <div class="inputBox">
                        <input
                          type="text"
                          name=""
                          required="required"
                          id="storeName"
                          value={reg.storeName}
                          onChange={registration}
                        />
                        <span class="text">Vendor Name</span>
                        <span class="line"></span>
                      </div>
                    </div>
                    <div class="coln">
                      <div class="inputBox">
                        <input
                          type="text"
                          name=""
                          required="required"
                          id="licenseNo"
                          value={reg.licenseNo}
                          onChange={registration}
                        />
                        <span class="text">License No</span>
                        <span class="line"></span>
                      </div>
                    </div>
                  </div>
                  <div class="row100">
                    <div class="coln">
                      <div class="inputBox">
                        <input
                          type="text"
                          name=""
                          required="required"
                          id="gst"
                          value={reg.gst}
                          onChange={registration}
                        />
                        <span class="text">GST No</span>
                        <span class="line"></span>
                      </div>
                    </div>
                    <div class="coln">
                      <div class="inputBox">
                        <input
                          type="text"
                          name=""
                          required="required"
                          id="upiId"
                          value={reg.upiId}
                          onChange={registration}
                        />
                        <span class="text">UPI Id</span>
                        <span class="line"></span>
                      </div>
                    </div>
                  </div>
                  <div class="row100">
                    <div class="coln">
                      <div class="inputBox">
                        <input
                          type="text"
                          name=""
                          required="required"
                          id="address1"
                          value={reg.address1}
                          onChange={registration}
                        />
                        <span class="text">Flat-No.</span>
                        <span class="line"></span>
                      </div>
                    </div>
                    <div class="coln">
                      <div class="inputBox">
                        <input
                          type="text"
                          name=""
                          required="required"
                          id="address2"
                          value={reg.address2}
                          onChange={registration}
                        />
                        <span class="text">Locality</span>
                        <span class="line"></span>
                      </div>
                    </div>
                  </div>
                  <div class="row100">
                    <div class="coln">
                      <div class="inputBox">
                        <input
                          type="text"
                          name=""
                          required="required"
                          id="city"
                          value={reg.city}
                          onChange={registration}
                        />
                        <span class="text">City</span>
                        <span class="line"></span>
                      </div>
                    </div>
                    <div class="coln">
                      <div class="inputBox">
                        <input
                          type="text"
                          name=""
                          required="required"
                          id="zip"
                          value={reg.zip}
                          onChange={registration}
                        />
                        <span class="text">ZIP</span>
                        <span class="line"></span>
                      </div>
                    </div>
                  </div>
                  <div class="row100">
                    <div class="coln">
                      <div class="inputBox">
                        <input
                          type="text"
                          name=""
                          required="required"
                          id="state"
                          value={reg.state}
                          onChange={registration}
                        />
                        <span class="text">State</span>
                        <span class="line"></span>
                      </div>
                    </div>
                    <div class="coln">
                      <div class="inputBox">
                        <input
                          type="text"
                          name=""
                          required="required"
                          id="country"
                          value={reg.country}
                          onChange={registration}
                        />
                        <span class="text">Country</span>
                        <span class="line"></span>
                      </div>
                    </div>
                  </div>

                  <div class="row100">
                    <div class="coln">
                      <div class="inputBox">
                        <input
                          type="text"
                          name=""
                          required="required"
                          id="ownerPan"
                          value={reg.ownerPan}
                          onChange={registration}
                        />
                        <span class="text">PAN No.</span>
                        <span class="line"></span>
                      </div>
                    </div>
                    <div class="coln">
                      <div class="inputBox">
                        <input
                          type="text"
                          name=""
                          required="required"
                          id="ownerAadhar"
                          value={reg.ownerAadhar}
                          onChange={registration}
                        />
                        <span class="text">Aadhar No.</span>
                        <span class="line"></span>
                      </div>
                    </div>
                  </div>
                  <div class="row100">
                    <div class="coln">
                      <div class="inputBox">
                        <input
                          type="text"
                          name=""
                          required="required"
                          id="bankName"
                          value={reg.bankName}
                          onChange={registration}
                        />
                        <span class="text">Bank Name</span>
                        <span class="line"></span>
                      </div>
                    </div>
                    <div class="coln">
                      <div class="inputBox">
                        <input
                          type="text"
                          name=""
                          required="required"
                          id="ifsc"
                          value={reg.ifsc}
                          onChange={registration}
                        />
                        <span class="text">IFSC Code</span>
                        <span class="line"></span>
                      </div>
                    </div>
                  </div>
                  <div class="row100">
                    <div class="coln">
                      <div class="inputBox">
                        <input
                          type="number"
                          name=""
                          required="required"
                          id="accountNo"
                          value={reg.accountNo}
                          onChange={registration}
                        />
                        <span class="text">Account No.</span>
                        <span class="line"></span>
                      </div>
                    </div>
                    <div class="coln">
                      <div class="inputBox">
                        <input
                          type="text"
                          name=""
                          required="required"
                          id="accountHolder"
                          value={reg.accountHolder}
                          onChange={registration}
                        />
                        <span class="text">accountHolder</span>
                        <span class="line"></span>
                      </div>
                    </div>
                  </div>
                  <div class="row100">
                    <div class="coln">
                      <div class="inputBox">
                        <input
                          type="text"
                          name=""
                          required="required"
                          id="vendorType"
                          value={reg.vendorType}
                          onChange={registration}
                        />
                        <span class="text">Vendor Type</span>
                        <span class="line"></span>
                      </div>
                    </div>
                    <div class="coln">
                      <div class="inputBox">
                        <input
                          type="text"
                          name=""
                          required="required"
                          id="storeManager"
                          value={reg.storeManager}
                          onChange={registration}
                        />
                        <span class="text">Store Manager.</span>
                        <span class="line"></span>
                      </div>
                    </div>
                  </div>
                  <div class="row100">
                    <div class="coln">
                      <div class="inputBox">
                        <input
                          type="text"
                          name=""
                          required="required"
                          id="services"
                          value={reg.services}
                          onChange={registration}
                        />
                        <span class="text">Services</span>
                        <span class="line"></span>
                      </div>
                    </div>
                    <div class="coln">
                      <div class="inputBox">
                        <input
                          type="text"
                          name=""
                          required="required"
                          id="categories"
                          value={reg.categories}
                          onChange={registration}
                        />
                        <span class="text">Categories.</span>
                        <span class="line"></span>
                      </div>
                    </div>
                  </div>

                  <div class="row100">
                    <div class="coln">
                      <div class="inputBox">
                        <input
                          type="checkbox"
                          name=""
                          required="required"
                          id="active"
                          checked={reg.active}
                          onClick={() => {
                            setReg({ ...reg, active: !reg.active });
                          }}
                        />
                        <span class="text">active</span>
                        <span class="line"></span>
                      </div>
                    </div>
                    <div class="coln">
                      <div class="inputBox">
                        <input
                          type="checkbox"
                          name=""
                          required="required"
                          id="whatsappUpdate"
                          checked={reg.whatsappUpdate}
                          onClick={() => {
                            setReg({
                              ...reg,
                              whatsappUpdate: !reg.whatsappUpdate,
                            });
                          }}
                        />
                        <span class="text">whatsappUpdate</span>
                        <span class="line"></span>
                      </div>
                    </div>
                  </div>
                  <br />
                  <button
                    type="submit"
                    className="support_btn"
                    style={{
                      width: "50%",
                      height: "3rem",
                      borderRadius: "20px",
                      fontSize: "1.5rem",
                    }}
                  >
                    REGISTER
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <section className="slice py-7">
        <div className="container">
          <div className="row row-grid align-items-center">
            <div className="col-12 col-md-5 col-lg-6 order-md-2 text-center">
              <figure className="w-100">
                <img
                  alt="Image placeholder"
                  src="assets/img/svg/illustrations/illustration-3.svg"
                  className="img-fluid mw-md-120"
                ></img>
                <img
                  alt="Image placeholder"
                  src="./assets/img/delivery-boy.png"
                  className="img-fluid mw-md-120"
                ></img>
              </figure>
            </div>
            <div className="col-12 col-md-7 col-lg-6 order-md-1 pr-md-5">
              <h1 className="display-4 text-center text-md-left mb-3">
                It's time to take your{" "}
                <strong className="text-primary">business online</strong>
              </h1>

              <p className="lead text-center text-md-left text-muted">
                Register in our app, and get started in no time.
              </p>

              <div className="text-center text-md-left mt-5">
                <a
                  href="#"
                  className="btn btn-primary btn-icon"
                  target="_blank"
                >
                  <span className="btn-inner--text">Download the app</span>
                  <span className="btn-inner--icon">
                    <i data-feather="chevron-right"></i>
                  </span>
                </a>
                <a
                  href="https://webpixels.io/illustrations"
                  className="btn btn-neutral btn-icon d-none d-lg-inline-block"
                  target="_blank"
                >
                  See Illustrations
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
}

export default Home;
