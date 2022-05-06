import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register2() {
  const history = useNavigate();
  // useEffect(() => {
  //   const registerinfo = localStorage.getItem("userInfo")
  //     ? JSON.parse(localStorage.getItem("userInfo"))
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
    uploadGSTcertificate: registerinfo.uploadGSTcertificate,
    uploadMenu: registerinfo.uploadMenu,
    liscenseNo: registerinfo.liscenseNo,
    gst: registerinfo.gst,
    storeName: registerinfo.storeName,
    storeManager: registerinfo.storeManger,
    vendorType: registerinfo.vendorType,
    countryCode: "",
    stateCode: "",
    zipcode: "",
    streetName: "",
    streetNumber: "",
    stateCode: "",
    categories: "",
    services: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("registerinfo", JSON.stringify(data));
    history("/register3");
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
            <li className="step-wizard-item current-item">
              <span className="progress-count">2</span>
              {/* <span className="progress-count">2</span-progress-count> */}
              <span className="progress-label">Store Details</span>
            </li>
            <li className="step-wizard-item ">
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
        <div className="form Third">
          <div className="details personal">
            <span className="title">Store Details</span>
            <div className="fields">
              <div className="inputBox">
                <label for="">Categories</label>
                <select
                  name=""
                  id="categories"
                  value={data.categories}
                  onChange={handleChange}
                  className="options"
                >
                  <option value="volvo">--Select--</option>
                  <option value="volvo">Foods Beverages</option>
                  <option value="saab">Pharma Medicine</option>
                  <option value="fiat">Grocery</option>
                  <option value="audi">Fruits & Vegetable</option>
                  <option value="audi">Meat & Fish </option>
                  <option value="audi">Pet Supplies</option>
                </select>
                <span className="line"></span>
              </div>

              {/* <div className="input-fields">
                <label for="">Sub Categories</label>
                <input
                  type="text"
                  placeholder="Enter Services"
                  id="services"
                  value={data.services}
                  onChange={handleChange}
                  required="required"
                />
              </div> */}

              <div className="inputBox">
                {/* <!-- <input type="text" name="" required="required" /> -->
             <!-- <span className="text"></span> --> */}
                <label for="">Services</label>
                <select
                  name=""
                  id="services"
                  value={data.services}
                  onChange={handleChange}
                  className="options"
                >
                  <option value="volvo">--Select--</option>
                  <option value="volvo">Delivery + Takeaway</option>
                  <option value="saab">Only Delivery</option>
                  <option value="fiat">Only Takeaway</option>
                  <option value="audi">All Services</option>
                </select>
                <span className="line"></span>
              </div>

              <div className="input-fields">
                <label for="">Store Address (House No)</label>
                <input
                  type="number"
                  id="streetNumber"
                  value={data.streetNumber}
                  onChange={handleChange}
                  placeholder="Enter Street Number"
                  required
                />
              </div>
              <div className="input-fields">
                <label for="">Store Address (Locality)</label>
                <input
                  type="text"
                  id="streetName"
                  value={data.streetName}
                  onChange={handleChange}
                  placeholder="Enter Locality Name"
                  required
                />
              </div>

              <div className="input-fields">
                <label for="">Store Address (City)</label>
                <input
                  type="text"
                  id="city"
                  value={data.city}
                  onChange={handleChange}
                  placeholder="Enter City"
                  required
                />
              </div>

              <div className="input-fields">
                <label for="">Store Address (State)</label>
                <input
                  type="text"
                  id="stateCode"
                  value={data.stateCode}
                  onChange={handleChange}
                  placeholder="Enter State"
                  required
                />
              </div>

              <div className="input-fields">
                <label for="">Store Address (PIN Code)</label>
                <input
                  type="number"
                  id="zipcode"
                  value={data.zipcode}
                  onChange={handleChange}
                  placeholder="Enter ZIP Code"
                  required
                />
              </div>
              <div className="input-fields">
                <label for="">Store Address (Country Code)</label>
                <input
                  type="text"
                  id="countryCode"
                  value={data.countryCode}
                  onChange={handleChange}
                  placeholder="Enter Country Code"
                  required
                />
              </div>
            </div>
            <div className="buttons">
              <button className="backbtn">
                <span className="btnText">Back</span>
                <i className="uil uil-navigator"></i>
              </button>

              <button className="nextbtn" type="submit">
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

export default Register2;
