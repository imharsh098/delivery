import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TopNav from "./TopNav";
import SideNav from "./sideNav";
import axios from "axios";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Map() {
  const history = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [mapdata, setMapdata] = useState({});
  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734,
  };
  const mapStyles = {
    height: "100%",
    width: "100%",
  };
  const success = (position) => {
    setMapdata({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  };
  // useEffect(async () => {
  //   if (!userInfo) {
  //     history("/login");
  //   }
  //   if (userInfo) {
  //     const config = {
  //       headers: {
  //         authorization: `Bearer ${userInfo.token}`,
  //       },
  //     };
  //     const { data } = await axios.get(`/api/stores/showMap`, config);
  //     console.log(data.location[0]);
  //     setMapdata({ lat: data.location[0], lng: data.location[1] });
  //   }
  // }, []);

  useEffect(() => {
    if (!userInfo) {
      history("/login");
    }
    if (userInfo) {
      navigator.geolocation.getCurrentPosition(success);
    }
  });

  const onMarkerDragEnd = (e) => {
    setMapdata({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  };

  return (
    <div>
      <TopNav />
      <div className="main">
        <SideNav />
        <div className="dashboard">
          <LoadScript googleMapsApiKey="YOUR_API_KEY_HERE">
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={13}
              center={currentPosition.lat ? currentPosition : defaultCenter}
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
      </div>
    </div>
  );
}

export default Map;
