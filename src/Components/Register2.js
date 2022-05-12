import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register2() {
  const history = useNavigate();
  const registerinfo = localStorage.getItem("registerinfo")
    ? JSON.parse(localStorage.getItem("registerinfo"))
    : "";
  // const [newdata, setNewdata] = useState({
  //   uploadAadharfront: "",
  //   uploadAadharback: "",
  //   uploadPan: "",
  //   uploadGSTcertificate: "",
  //   uploadMenu: "",
  // });
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
    uploadAadharfront: "",
    uploadAadharback: "",
    uploadPan: "",
    uploadGSTcertificate: "",
    uploadMenu: "",

    latitude: registerinfo.latitude,
    longitude: registerinfo.longitude,
    panNo: "",
    aadharNo: "",

    liscenseNo: "",
    gst: "",
  });
  const getBack = async (e) => {
    history("/map");
  };

  const handleChange = (e) => {
    if (e.target.id === "uploadAadharfront") {
      console.log(e.target.files, "1");
      setData({ ...data, [e.target.id]: e.target.files[0] });
    }
    if (e.target.id === "uploadAadharback") {
      console.log(e.target.files, "2");
      setData({ ...data, [e.target.id]: e.target.files[0] });
    }
    if (e.target.id === "uploadPan") {
      console.log(e.target.files, "3");
      setData({ ...data, [e.target.id]: e.target.files[0] });
    }
    if (e.target.id === "uploadGSTcertificate") {
      console.log(e.target.files, "4");
      setData({ ...data, [e.target.id]: e.target.files[0] });
    }
    if (e.target.id === "uploadMenu") {
      console.log(e.target.files, "5");
      setData({ ...data, [e.target.id]: e.target.files[0] });
    } else {
      setData({ ...data, [e.target.id]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("registerinfo", JSON.stringify(data));
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
            <li className="step-wizard-item current-item">
              <span className="progress-count">5</span>
              <span className="progress-label">Terms of Use</span>
            </li>
          </ul>
        </section>
        <div className="form Third">
          <div className="details personal">
            <span className="title">Store Details</span>
            <div className="fields">
              <div className="input-fields">
                <label for="">Upload Product Menu</label>
                <input
                  type="file"
                  id="uploadMenu"
                  name="image"
                  onChange={handleChange}
                  placeholder=""
                  required="required"
                />
                <button
                  onClick={async () => {
                    const formData1 = new FormData();
                    // Update the formData object
                    formData1.append("image", data.uploadMenu);
                    // setData({ ...data, [e.target.id]: e.target.files[0] });
                    const config = {
                      headers: {
                        contentType: "multipart/form-data",
                      },
                    };
                    const imagedata1 = await axios.post(
                      `/api/upload/`,
                      formData1,
                      config
                    );
                    setData({
                      ...data,
                      uploadMenu: imagedata1.data.imagedata,
                    });
                  }}
                >
                  Upload
                </button>
              </div>
              <div className="input-fields">
                <label for="">Aadhar Number</label>
                <input
                  type="number"
                  id="aadharNo"
                  value={data.aadharNo}
                  onChange={handleChange}
                  placeholder="Enter Your Aadhar Number"
                  required="required"
                />
              </div>

              <div className="input-fields">
                <label for="">Image of Aadhar card (Front)</label>
                <input
                  type="file"
                  id="uploadAadharfront"
                  name="image"
                  onChange={handleChange}
                  placeholder=""
                  required="required"
                />
                <button
                  onClick={async () => {
                    const formData2 = new FormData();
                    // Update the formData object
                    formData2.append("image", data.uploadAadharfront);
                    // setData({ ...data, [e.target.id]: e.target.files[0] });
                    const config = {
                      headers: {
                        contentType: "multipart/form-data",
                      },
                    };
                    const imagedata2 = await axios.post(
                      `/api/upload/`,
                      formData2,
                      config
                    );
                    setData({
                      ...data,
                      uploadAadharfront: imagedata2.data.imagedata,
                    });
                  }}
                >
                  Upload
                </button>
              </div>
              <div className="input-fields">
                <label for="">Image of Aadhar card (Back)</label>
                <input
                  type="file"
                  id="uploadAadharback"
                  name="image"
                  onChange={handleChange}
                  placeholder=""
                  required="required"
                />
                <button
                  onClick={async () => {
                    const formData3 = new FormData();
                    // Update the formData object
                    formData3.append("image", data.uploadAadharback);
                    // setData({ ...data, [e.target.id]: e.target.files[0] });
                    const config = {
                      headers: {
                        contentType: "multipart/form-data",
                      },
                    };
                    const imagedata3 = await axios.post(
                      `/api/upload/`,
                      formData3,
                      config
                    );
                    setData({
                      ...data,
                      uploadAadharback: imagedata3.data.imagedata,
                    });
                  }}
                >
                  Upload
                </button>
              </div>

              <div className="input-fields">
                <label for="">PAN Card</label>
                <input
                  type="text"
                  id="panNo"
                  value={data.panNo}
                  onChange={handleChange}
                  placeholder="Enter PAN No."
                  required="required"
                />
              </div>

              <div className="input-fields">
                <label for="">Image of PAN card (Front)</label>
                <input
                  type="file"
                  id="uploadPan"
                  name="image"
                  onChange={handleChange}
                  placeholder=""
                  required="required"
                />
                <button
                  onClick={async () => {
                    const formData4 = new FormData();
                    // Update the formData object
                    formData4.append("image", data.uploadPan);
                    // setData({ ...data, [e.target.id]: e.target.files[0] });
                    const config = {
                      headers: {
                        contentType: "multipart/form-data",
                      },
                    };
                    const imagedata4 = await axios.post(
                      `/api/upload/`,
                      formData4,
                      config
                    );
                    setData({
                      ...data,
                      uploadPan: imagedata4.data.imagedata,
                    });
                  }}
                >
                  Upload
                </button>
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
                  type="file"
                  id="uploadGSTcertificate"
                  name="image"
                  onChange={handleChange}
                  placeholder=""
                  required="required"
                />
                <button
                  onClick={async () => {
                    const formData5 = new FormData();
                    // Update the formData object
                    formData5.append("image", data.uploadGSTcertificate);
                    // setData({ ...data, [e.target.id]: e.target.files[0] });
                    const config = {
                      headers: {
                        contentType: "multipart/form-data",
                      },
                    };
                    const imagedata5 = await axios.post(
                      `/api/upload/`,
                      formData5,
                      config
                    );
                    setData({
                      ...data,
                      uploadGSTcertificate: imagedata5.data.imagedata,
                    });
                  }}
                >
                  Upload
                </button>
              </div>
            </div>
            <div className="buttons">
              <button className="backbtn" onClick={getBack}>
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
