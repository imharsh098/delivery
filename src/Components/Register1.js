import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register1() {
  const history = useNavigate();
  // useEffect(() => {
  //   const registerinfo = localStorage.getItem("registerinfo")
  //     ? JSON.parse(localStorage.getItem("registerinfo"))
  //     : "";
  // }, []);
  const registerinfo = localStorage.getItem("registerinfo")
    ? JSON.parse(localStorage.getItem("registerinfo"))
    : "";
  const [data, setData] = useState({
    fullName: registerinfo.fullName,
    email: registerinfo.email,
    password: registerinfo.password,
    panNo: registerinfo.panNo,
    aadharNo: registerinfo.aadharNo,
    phoneNo: registerinfo.phoneNo,
    uploadAadharfront: registerinfo.uploadAadharfront,
    uploadAadharback: registerinfo.uploadAadharback,
    uploadPan: registerinfo.uploadPan,
    liscenseNo: "",
    gst: "",
    storeName: "",
    storeManager: "",
    vendorType: "",
    uploadGSTcertificate: "",
    uploadMenu: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("registerinfo", JSON.stringify(data));
    history("/register2");
  };
  return (
    <div className="container1">
      <header>Registration</header>
      <form onSubmit={handleSubmit}>
        <section className="step-wizard">
          <ul className="step-wizard-list">
            <li className="step-wizard-item current-item">
              <span className="progress-count">1</span>
              <span className="progress-label">Pesonal Details</span>
            </li>
            <li className="step-wizard-item">
              <span className="progress-count">2</span>
              {/* <span className="progress-count">2</span-progress-count> */}
              <span className="progress-label">Store Details</span>
            </li>
            <li className="step-wizard-item current-item">
              <span className="progress-count">3</span>
              {/* <span className="progress-count">2</span-progress-count> */}
              <span className="progress-label">Store Details</span>
            </li>
            <li className="step-wizard-item current-item">
              <span className="progress-count">4</span>
              {/* <span className="progress-count">4</span-progress-count> */}
              <span className="progress-label">Bank Details</span>
            </li>
          </ul>
        </section>
        <div className="form second">
          <div className="details personal">
            <span className="title">Store Details</span>
            <div className="fields">
              <div className="input-fields">
                <label for="">Store Name</label>
                <input
                  type="text"
                  id="storeName"
                  value={data.storeName}
                  onChange={handleChange}
                  placeholder="Enter Vendor Name"
                  required="required"
                />
              </div>

              <div className="input-fields">
                <label for="">License Number</label>
                <input
                  type="text"
                  id="liscenseNo"
                  value={data.liscenseNo}
                  onChange={handleChange}
                  placeholder="Enter License Number"
                  required
                />
              </div>

              <div className="input-fields">
                <label for="">GST Number</label>
                <input
                  type="text"
                  id="gst"
                  value={data.gst}
                  onChange={handleChange}
                  placeholder="Enter GST Number"
                  required="required"
                />
              </div>
              {/* GST Certificate */}
              <div className="input-fields">
                <label for="">Upload GST Certificate</label>
                <input
                  type="text"
                  id="uploadGSTcertificate"
                  value={data.uploadGSTcertificate}
                  onChange={handleChange}
                  placeholder=""
                  required="required"
                />
              </div>

              <div className="input-fields">
                <label for="">Store Manager</label>
                <input
                  type="text"
                  id="storeManager"
                  value={data.storeManager}
                  onChange={handleChange}
                  placeholder="Enter Store Manager Name"
                  required="required"
                />
              </div>
              {/* Product Menu */}
              <div className="input-fields">
                <label for="">Upload Product Menu</label>
                <input
                  type="text"
                  id="uploadMenu"
                  value={data.uploadMenu}
                  onChange={handleChange}
                  placeholder=""
                  required="required"
                />
              </div>

              <div className="input-fields">
                <label for="">Vendor Type</label>
                <input
                  type="text"
                  id="vendorType"
                  value={data.vendorType}
                  onChange={handleChange}
                  placeholder="Enter Account Number"
                  required="required"
                />
              </div>
            </div>
            <div className="buttons">
              <button className="backbtn">
                <span className="btnText">Back</span>
                <i className="uil uil-navigator"></i>
              </button>

              <button className="nextbtn">
                <span className="btnText">Next</span>
                <i className="uil uil-navigator"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register1;
