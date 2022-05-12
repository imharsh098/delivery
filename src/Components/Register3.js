import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

function Register3() {
  const history = useNavigate();
  const registerinfo = localStorage.getItem("registerinfo")
    ? JSON.parse(localStorage.getItem("registerinfo"))
    : "";
  const getBack = async (e) => {
    history("/register2");
  };
  const [data, setData] = useState({
    fullName: registerinfo.fullName,
    email: registerinfo.email,
    phoneNo: registerinfo.phoneNo,
    password: registerinfo.password,
    confirmpassword: registerinfo.confirmpassword,
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
    uploadMenu: registerinfo.uploadMenu,
    latitude: registerinfo.latitude,
    longitude: registerinfo.longitude,
    panNo: registerinfo.panNo,
    aadharNo: registerinfo.aadharNo,
    uploadAadharfront: registerinfo.uploadAadharfront,
    uploadAadharback: registerinfo.uploadAadharback,
    uploadPan: registerinfo.uploadPan,
    uploadGSTcertificate: registerinfo.uploadGSTcertificate,
    liscenseNo: registerinfo.liscenseNo,
    gst: registerinfo.gst,
    bankName: "",
    accountHolder: "",
    accountNo: "",
    ifsc: "",
    upiId: "",
    cancelledCheque: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("registerinfo", JSON.stringify(data));
    history("/register4");
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
              <span className="progress-label">Store Details</span>
            </li>
            <li className="step-wizard-item  current-item">
              <span className="progress-count">3</span>
              <span className="progress-label">Store Details</span>
            </li>
            <li className="step-wizard-item ">
              <span className="progress-count">4</span>
              <span className="progress-label">Bank Details</span>
            </li>
            <li className="step-wizard-item current-item">
              <span className="progress-count">5</span>
              <span className="progress-label">Terms of Use</span>
            </li>
          </ul>
        </section>
        <div className="form forth">
          <div className="details personal">
            <span className="title">Bank Details</span>
            <div className="fields">
              <div className="input-fields">
                <label for="">Bank Name</label>
                <input
                  type="text"
                  id="bankName"
                  value={data.bankName}
                  onChange={handleChange}
                  placeholder="Enter Your Bank Name"
                  required="required"
                />
              </div>
              <div className="input-fields">
                <label for="">Account Holder Name</label>
                <input
                  type="text"
                  id="accountHolder"
                  value={data.accountHolder}
                  required="required"
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                />
              </div>

              <div className="input-fields">
                <label for="">Account Number</label>
                <input
                  type="number"
                  placeholder="Enter Your account no"
                  id="accountNo"
                  value={data.accountNo}
                  required="required"
                  onChange={handleChange}
                />
              </div>
              <div className="input-fields">
                <label for="">IFSC Code</label>
                <input
                  type="text"
                  placeholder="Enter IFSC Code"
                  id="ifsc"
                  value={data.ifsc}
                  required="required"
                  onChange={handleChange}
                />
              </div>

              <div className="input-fields">
                <label for="">UPI Id</label>
                <input
                  type="text"
                  id="upiId"
                  value={data.upiId}
                  required="required"
                  onChange={handleChange}
                  placeholder="Enter UPI Id"
                />
              </div>

              {/* check this */}
              <div className="input-fields">
                <label for="">Upload (Passbook or Cancel Cheque)</label>
                <input
                  type="text"
                  id="cancelledCheque"
                  value={data.cancelledCheque}
                  onChange={handleChange}
                  placeholder="Upload passbook/cancelled cheque"
                  required
                />
              </div>
            </div>
            <div className="buttons">
              <button className="nextbtn" onClick={getBack}>
                <span className="btnText">Back</span>
                <i className="uil uil-navigator"></i>
              </button>
              <button className="nextbtn" type="submit">
                <span className="btnText">Submit</span>
                <i className="uil uil-navigator"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register3;
