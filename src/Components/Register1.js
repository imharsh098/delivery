import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

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
    latitude: "",
    longitude: "",
    openingTime: "",
    closingTime: "",
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
  const [mapdata, setMapdata] = useState({ lat: 41.3851, lng: 5.1734 });
  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734,
  };
  const mapStyles = {
    height: "80%",
    width: "100%",
  };
  const success = (position) => {
    setMapdata({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  };

  const getBack = async (e) => {
    history("/register");
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  });

  const onMarkerDragEnd = (e) => {
    setMapdata({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    console.log(e.latLng.lat(), e.latLng.lng());
  };
  useEffect(() => {
    localStorage.setItem("registerinfo", JSON.stringify(data));
    // history("/register2");
  }, [data]);
  const [bgcolor, setBgcolor] = useState("grey");

  const handleSubmit2 = (e) => {
    e.preventDefault();
    setBgcolor("limegreen");
    setData({ ...data, latitude: mapdata.lat, longitude: mapdata.lng });
    setTimeout(() => {
      history("/register2");
    }, 2000);
  };

  return (
    <div className="container1">
      <header>Registration</header>
      <form>
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
                  placeholder="Enter Store Name"
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
                <label for="">Opening Time</label>
                <input
                  type="time"
                  min="9:00"
                  max="18:00"
                  id="openingTime"
                  value={data.openingTime}
                  onChange={handleChange}
                  placeholder="Store Opening Time"
                  required="required"
                />
              </div>
              <div className="input-fields">
                <label for="">Closing Time</label>
                <input
                  type="time"
                  min="9:00"
                  max="18:00"
                  id="closingTime"
                  value={data.closingTime}
                  onChange={handleChange}
                  placeholder="Store Closing Time"
                  required="required"
                />
              </div>

              <div className="input-fields">
                <label for="categories">Categories</label>
                <select
                  name="categories"
                  id="categories"
                  value={data.categories}
                  onChange={handleChange}
                  className="options"
                >
                  <option value="categories">--Select--</option>
                  <option value="Foods Beverages">Foods Beverages</option>
                  <option value="Pharma Medicine">Pharma Medicine</option>
                  <option value="Grocery">Grocery</option>
                  <option value="Fruits & Vegetable">Fruits & Vegetable</option>
                  <option value="Meat & Fish">Meat & Fish </option>
                  <option value="Pet Supplies">Pet Supplies</option>
                </select>
              </div>

              <div className="input-fields">
                <label for="services">Services</label>
                <select
                  name="services"
                  id="services"
                  value={data.services}
                  onChange={handleChange}
                  className="options"
                >
                  <option value="volvo">--Select--</option>
                  <option value="Delivery + Takeaway">
                    Delivery + Takeaway
                  </option>
                  <option value="Only Delivery">Only Delivery</option>
                  <option value="Only Takeaway">Only Takeaway</option>
                  <option value="All Services">All Services</option>
                </select>
              </div>
              <div className="input-fields">
                <label for="">Store Manager</label>
                <input
                  type="text"
                  id="storeManager"
                  value={data.storeManager}
                  onChange={handleChange}
                  placeholder="Enter Store Manager Name"
                  required
                />
              </div>
            </div>
            <div style={{ height: "30rem", marginTop: "1.5rem" }}>
              <LoadScript googleMapsApiKey="AIzaSyB3ZdwasSmzdj5giIxqCmxrJBJVwh5VwqA">
                <GoogleMap
                  mapContainerStyle={mapStyles}
                  zoom={13}
                  center={mapdata.lat ? mapdata : defaultCenter}
                >
                  {mapdata.lat ? (
                    <Marker
                      position={mapdata}
                      onDragEnd={(e) => onMarkerDragEnd(e)}
                      draggable={true}
                    />
                  ) : null}
                </GoogleMap>
              </LoadScript>
            </div>
            <div className="fields">
              <div className="input-fields">
                <label for="">Store Address (House No)</label>
                <input
                  type="text"
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
              <button className="backbtn" onClick={getBack}>
                <span className="btnText">Back</span>
                <i className="uil uil-navigator"></i>
              </button>

              <button
                className="nextbtn"
                onClick={handleSubmit2}
                style={{ backgroundColor: { bgcolor } }}
              >
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
