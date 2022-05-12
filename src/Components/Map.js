import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Map() {
  const registerinfo = localStorage.getItem("registerinfo")
    ? JSON.parse(localStorage.getItem("registerinfo"))
    : "";
  const [data, setData] = useState({
    fullName: registerinfo.fullName,
    email: registerinfo.email,
    password: registerinfo.password,
    confirmpassword: registerinfo.confirmpassword,
    phoneNo: registerinfo.phoneNo,
    storeName: registerinfo.storeName,
    storeManager: registerinfo.storeManger,
    vendorType: registerinfo.vendorType,
    countryCode: registerinfo.countryCode,
    stateCode: registerinfo.stateCode,
    zipcode: registerinfo.zipcode,
    streetName: registerinfo.streetName,
    streetNumber: registerinfo.streetNumber,
    city: registerinfo.city,
    categories: registerinfo.categories,
    services: registerinfo.services,
    latitude: "",
    longitude: "",
  });
  const history = useNavigate();
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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  });

  const onMarkerDragEnd = (e) => {
    setMapdata({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    console.log(e.latLng.lat(), e.latLng.lng());
  };
  const handleSubmit = () => {
    // e.preventDefault();

    setData({ ...data, latitude: mapdata.lat, longitude: mapdata.lng });
  };
  const getBack = async (e) => {
    history("/register1");
  };

  useEffect(() => {
    localStorage.setItem("registerinfo", JSON.stringify(data));
    // history("/register2");
  }, [data]);

  return (
    <div className="container1">
      <header>Registration</header>
      <div style={{ height: "34rem", marginTop: "1.5rem" }}>
        <LoadScript googleMapsApiKey="AIzaSyB3ZdwasSmzdj5giIxqCmxrJBJVwh5VwqA">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={mapdata.lat ? mapdata : defaultCenter}
          >
            {/* {mapdata.map((item) => {
                return (
                  <Marker
                    key={Math.floor(Math.random() * 10)}
                    position={item}
                  />
                );
              })} */}
            {/* {mapdata.lat && <Marker position={mapdata} />} */}
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
      <div className="buttons">
        <button className="backbtn" onClick={getBack}>
          <span className="btnText">Back</span>
          <i className="uil uil-navigator"></i>
        </button>

        <button className="nextbtn" onClick={handleSubmit}>
          <span className="btnText">Next</span>
          <i className="uil uil-navigator"></i>
        </button>
      </div>
    </div>
  );
}

export default Map;
