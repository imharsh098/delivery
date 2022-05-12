import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const history = useNavigate();
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phoneNo: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("registerinfo", JSON.stringify(data));
    history("/register1");
  };

  return (
    <div className="container1">
      <header>Registration</header>
      <form onSubmit={handleSubmit}>
        <section className="step-wizard">
          <ul className="step-wizard-list">
            <li className="step-wizard-item">
              <span className="progress-count">1</span>
              <span className="progress-label">Pesonal Details</span>
            </li>
            <li className="step-wizard-item current-item">
              <span className="progress-count">2</span>

              <span className="progress-label">Store Details</span>
            </li>
            <li className="step-wizard-item current-item">
              <span className="progress-count">3</span>
              <span className="progress-label">Store Details</span>
            </li>
            <li className="step-wizard-item current-item">
              <span className="progress-count">4</span>
              <span className="progress-label">Bank Details</span>
            </li>
            <li className="step-wizard-item current-item">
              <span className="progress-count">5</span>
              <span className="progress-label">Terms of Use</span>
            </li>
          </ul>
        </section>
        <div className="form first">
          <div className="details personal">
            <span className="title">Personal Details</span>
            <div className="fields">
              <div className="input-fields">
                <label for="">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  id="fullName"
                  value={data.fullName}
                  onChange={handleChange}
                  required="required"
                />
              </div>
              <div className="input-fields">
                <label for="">Email Id</label>
                <input
                  type="text"
                  id="email"
                  value={data.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email Id"
                  required="required"
                />
              </div>

              <div className="input-fields">
                <label for="">Mobile Number</label>
                <input
                  type="number"
                  id="phoneNo"
                  value={data.phoneNo}
                  onChange={handleChange}
                  placeholder="Enter Your Mobile Number"
                  required
                />
              </div>
              <div className="input-fields">
                <label for="">Password </label>
                <input
                  type="password"
                  id="password"
                  value={data.password}
                  onChange={handleChange}
                  placeholder="Enter Your Password"
                  required="required"
                />
              </div>
              <div className="input-fields">
                <label for="">Confirm Password </label>
                <input
                  type="password"
                  id="confirmpassword"
                  value={data.confirmpassword}
                  onChange={handleChange}
                  placeholder="Enter Your Password"
                  required="required"
                />
              </div>
            </div>

            <button className="nextbtn" type="submit">
              <span className="btnText">Next</span>
              <i className="uil uil-navigator"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
