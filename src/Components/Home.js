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
    history("/order");
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
          city: reg.address.city,
          country: reg.address.country,
          state: reg.address.state,
          zip: reg.address.zip,
          address1: reg.address.address1,
          address2: reg.address.address2,
        },
        services: reg.services,
        categories: reg.categories,
        active: reg.active,
        ownerAadhar: reg.ownerAadhar,
        gst: reg.gst,
        email: reg.emaill,
        licenseNo: reg.licenseNo,
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
      history("/");
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
    address: {
      city: "",
      country: "",
      state: "",
      zip: "",
      address1: "",
      address2: "",
    },
    services: "",
    categories: "",
    active: true,
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
    whatsappUpdate: true,
    passwordd: "",
  });
  const [log, setLog] = useState({
    email: "",
    password: "",
  });

  const registration = (e) => {
    if (e.target.id === "whatsappUpdate" || e.target.id === "active") {
      setReg({ ...reg, [e.target.id]: !e.target.value });
    } else {
      setReg({ ...reg, [e.target.id]: e.target.value });
    }
  };
  const loggingIn = (e) => {
    setLog({ ...log, [e.target.id]: e.target.value });
  };

  return (
    <div className="home">
      <button
        type="button"
        className="btn"
        data-toggle="modal"
        data-target="#exampleModalLong"
      >
        Login
      </button>
      <button
        type="button"
        class="btn"
        data-toggle="modal"
        data-target="#exampleModalLong"
      >
        Register
      </button>

      <div
        className="modal fade"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-body">
          <div className="login_all">
            <form onSubmit={handleLogin}>
              <div className="contain">
                <h2 className="modal-title" id="exampleModalLongTitle">
                  LOGIN
                </h2>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
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

                <div className="row100">
                  <div className="coln">
                    <button type="submit" className="support_btn">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModalLong"
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
                        value={reg.email}
                        onChange={registration}
                      />
                      <span class="text">Email</span>
                      <span class="line"></span>
                    </div>
                  </div>
                  <div class="coln">
                    <div class="inputBox">
                      <input type="text" name="" required="required" />
                      <span class="text">Email</span>
                      <span class="line"></span>
                    </div>
                  </div>
                  <div class="coln">
                    <div class="inputBox">
                      <input
                        type="password"
                        name=""
                        required="required"
                        id="passwordd"
                        value={reg.password}
                        onChange={registration}
                      />
                      <span class="text">Password</span>
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
                </div>

                <div class="row100">
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
                        id="ifsc"
                        value={reg.ifsc}
                        onChange={registration}
                      />
                      <span class="text">IFSC Code</span>
                      <span class="line"></span>
                    </div>
                  </div>
                  <div class="coln">
                    <div class="inputBox">
                      <input
                        type="text"
                        name=""
                        required="required"
                        id=""
                        value={reg.address.city}
                        onChange={registration}
                      />
                      <span class="text">Address</span>
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
                  {/* <div class="coln">
                  <div class="inputBox">
                    <select name="" id="" class="options">
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="fiat">Fiat</option>
                      <option value="audi">Audi</option>
                    </select>
                    <span class="line"></span>
                  </div>
                </div> */}
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
                </div>
                <div class="row100">
                  <div class="coln">
                    <button type="submit" className="support_btn">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
