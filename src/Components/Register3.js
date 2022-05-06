import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginAction, registerAction } from "../actions/userActions";

function Register3() {
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo: registerInfo } = userRegister;
  const registerinfo = localStorage.getItem("registerinfo")
    ? JSON.parse(localStorage.getItem("registerinfo"))
    : "";
  useEffect(() => {
    console.log(registerinfo);
  }, []);
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
    countryCode: registerinfo.countryCode,
    stateCode: registerinfo.stateCode,
    zipcode: registerinfo.zipcode,
    streetName: registerinfo.streetName,
    streetNumber: registerinfo.streetNumber,
    city: registerinfo.city,
    categories: registerinfo.categories,
    services: registerinfo.services,
    bankName: "",
    accountHolder: "",
    accountNo: "",
    ifsc: "",
    upiId: "",
    cancelledCheque: "",
    terms: true,
    policy: true,
    whatsappUpdate: true,
    active: true,
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      registerAction({
        storeName: data.storeName,
        fullName: data.fullName,
        phoneNo: data.phoneNo,
        address: {
          city: data.city,
          countryCode: data.countryCode,
          stateCode: data.stateCode,
          zipcode: data.zipcode,
          streetName: data.streetName,
          streetNumber: data.streetNumber,
        },
        services: data.services,
        categories: data.categories,
        active: data.active,
        ownerAadhar: data.aadharNo,
        gst: data.gst,
        email: data.email,
        liscenseNo: data.liscenseNo,
        ownerPan: data.panNo,
        bankName: data.bankName,
        accountHolder: data.accountHolder,
        accountNo: data.accountNo,
        ifsc: data.ifsc,
        vendorType: data.vendorType,
        upiId: data.upiId,
        storeManager: data.storeManager,
        whatsappUpdate: data.whatsappUpdate,
        terms: data.terms,
        policy: data.policy,
        password: data.password,
        uploadAadharfront: data.uploadAadharfront,
        uploadAadharback: data.uploadAadharback,
        uploadPan: data.uploadPan,
        uploadGSTcertificate: data.uploadGSTcertificate,
        uploadMenu: data.uploadMenu,
        cancelledCheque: data.cancelledCheque,
      })
    );
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
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="terms"
                  checked={data.terms}
                  onClick={() => {
                    setData({
                      ...data,
                      terms: !data.terms,
                    });
                  }}
                  required="required"
                />
                Terms & Conditions
                <br />
                <input
                  type="checkbox"
                  id="policy"
                  checked={data.policy}
                  onClick={() => {
                    setData({
                      ...data,
                      policy: !data.policy,
                    });
                  }}
                  required="required"
                />{" "}
                Company Policy
                <br />
                <input
                  type="checkbox"
                  id="active"
                  checked={data.active}
                  onClick={() => {
                    setData({
                      ...data,
                      active: !data.active,
                    });
                  }}
                  required="required"
                />
                Status Active
                <br />
                <input
                  type="checkbox"
                  id="whatsappUpdate"
                  checked={data.whatsappUpdate}
                  onClick={() => {
                    setData({
                      ...data,
                      whatsappUpdate: !data.whatsappUpdate,
                    });
                  }}
                  required="required"
                />
                Whatsapp Update
                <br />
              </div>
            </div>
            <div className="buttons">
              <button className="nextbtn">
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
