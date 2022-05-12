import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register1() {
  const history = useNavigate();
  const registerinfo = localStorage.getItem("registerinfo")
    ? JSON.parse(localStorage.getItem("registerinfo"))
    : "";
  const [data, setData] = useState({
    fullName: registerinfo.fullName,
    email: registerinfo.email,
    password: registerinfo.password,
    confirmpassword: registerinfo.confirmpassword,
    phoneNo: registerinfo.phoneNo,
    countryCode: "",
    stateCode: "",
    zipcode: "",
    streetName: "",
    streetNumber: "",
    city: "",
    categories: "",
    services: "",
    storeManager: "",
    storeName: "",
    vendorType: "",
  });

  const getBack = async (e) => {
    history("/register");
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("registerinfo", JSON.stringify(data));
    history("/map");
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
            <li className="step-wizard-item current-item">
              <span className="progress-count">5</span>
              <span className="progress-label">Terms of Use</span>
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
                <label for="">Vendor Type</label>
                <input
                  type="text"
                  id="vendorType"
                  value={data.vendorType}
                  onChange={handleChange}
                  placeholder="Enter Vendor Type"
                  required="required"
                />
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

              <div className="inputBox">
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
              {/* Product Menu */}
            </div>
            <div className="buttons">
              <button className="backbtn" onClick={getBack}>
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
