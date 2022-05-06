import { React } from "react";
import { Link } from "react-router-dom";
import image from "./assets/img/delivery-boy.png";
import image1 from "./assets/img/image1.png";
import image2 from "./assets/img/image2.png";
import image3 from "./assets/img/image3.png";
import image4 from "./assets/img/image4.png";

function Home() {
  // const dispatch = useDispatch();
  // const history = useNavigate();
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo, loading, error } = userLogin;
  // const userRegister = useSelector((state) => state.userRegister);
  // const { userInfo: registerInfo } = userRegister;
  // // login function
  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   dispatch(loginAction(log.email, log.password));
  // };
  // // register function
  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   dispatch(
  //     registerAction({
  //       storeName: reg.storeName,
  //       fullName: reg.fullName,
  //       phoneNo: reg.phoneNo,
  //       address: {
  //         city: reg.city,
  //         country: reg.country,
  //         state: reg.state,
  //         zip: reg.zip,
  //         address1: reg.address1,
  //         address2: reg.address2,
  //       },
  //       services: reg.services,
  //       categories: reg.categories,
  //       active: reg.active,
  //       ownerAadhar: reg.ownerAadhar,
  //       gst: reg.gst,
  //       email: reg.emaill,
  //       liscenseNo: reg.licenseNo,
  //       ownerPan: reg.ownerPan,
  //       bankName: reg.bankName,
  //       accountHolder: reg.accountHolder,
  //       accountNo: reg.accountNo,
  //       ifsc: reg.ifsc,
  //       vendorType: reg.vendorType,
  //       upiId: reg.upiId,
  //       storeManager: reg.storeManager,
  //       whatsappUpdate: reg.whatsappUpdate,
  //       password: reg.passwordd,
  //     })
  //   );
  // };

  // useEffect(() => {
  //   if (userInfo) {
  //     history("/order");
  //   }
  // }, [userLogin]);
  // useEffect(async () => {
  //   if (registerInfo) {
  //     history("/product");
  //   }
  // }, [userRegister]);
  // const [reg, setReg] = useState({
  //   storeName: "",
  //   fullName: "",
  //   phoneNo: "",
  //   emaill: "",
  //   city: "",
  //   country: "",
  //   state: "",
  //   zip: "",
  //   address1: "",
  //   address2: "",
  //   services: "",
  //   categories: "",
  //   active: false,
  //   ownerAadhar: "",
  //   gst: "",
  //   licenseNo: "",
  //   ownerPan: "",
  //   bankName: "",
  //   accountHolder: "",
  //   accountNo: "",
  //   ifsc: "",
  //   vendorType: "",
  //   upiId: "",
  //   storeManager: "",
  //   whatsappUpdate: false,
  //   passwordd: "",
  // });
  // const [log, setLog] = useState({
  //   email: "",
  //   password: "",
  // });

  // const registration = (e) => {
  //   setReg({ ...reg, [e.target.id]: e.target.value });
  // };
  // const loggingIn = (e) => {
  //   setLog({ ...log, [e.target.id]: e.target.value });
  // };
  // const redirect = () => {
  //   history("/order");
  // };

  return (
    <div>
      <nav
        className="Home navbar-expand-lg navbar-light bg-white"
        style={{ width: "100%", height: "5rem" }}
      >
        <div
          className="container"
          style={{ display: "flex", justifyContent: "end", padding: "1rem" }}
        >
          <Link to="/login">
            <button
              type="button"
              className="navbar-btn btn btn-sm btn-primary d-none d-lg-inline-block ml-3"
              style={{
                width: "100%",
                fontSize: "1.5rem",
                backgroundColor: "limegreen",
                border: "none",
              }}
            >
              Login
            </button>
          </Link>
          <Link to="/register">
            <button
              type="button"
              className="navbar-btn btn btn-sm btn-primary d-none d-lg-inline-block ml-3"
              style={{
                width: "100%",
                fontSize: "1.5rem",
                backgroundColor: "limegreen",
                border: "none",
              }}
            >
              Register
            </button>
          </Link>
        </div>
      </nav>
      <section className="slice py-2">
        <div className="container">
          <div className="row row-grid align-items-center">
            <div className="col-12 col-md-5 col-lg-6 order-md-2 text-center">
              <div className="w-100">
                {/* <!-- <img alt="Image placeholder" src="assets/img/svg/illustrations/illustration-3.svg" className="img-fluid mw-md-120"> --> */}
                <img
                  alt="Image placeholder"
                  src={image}
                  className="img-fluid mw-md-120"
                />
              </div>
            </div>
            <div className="col-12 col-md-7 col-lg-6 order-md-1 pr-md-5">
              <h1 className="display-4 text-center text-md-left mb-3">
                It's time to take your{" "}
                <strong className="text-primary">business online</strong>
              </h1>

              <p className="lead text-center text-md-left text-muted">
                Register in our app, and get started in no time.
              </p>

              <div className="text-center text-md-left mt-5">
                <a
                  href="#"
                  className="btn btn-primary btn-icon"
                  target="_blank"
                >
                  <span className="btn-inner--text">Download the app</span>
                  <span className="btn-inner--icon">
                    <i data-feather="chevron-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <section
          className="slice slice-lg pt-lg-30 pb-30 pb-lg-30 bg-section-secondary"
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div className="card" style={{ width: "40%", marginBottom: "1rem" }}>
            <div className="card-body pb-1">
              <div className="pt-2 pb-1">
                <img
                  src={image1}
                  className="img-fluid img-center"
                  style={{ height: "100px" }}
                  alt="Illustration"
                />
              </div>
              <h5 className="h4 lh-130 mb-3">Medicines & Pharmacy</h5>
              <p className="text-muted mb-0">
                Increase your sales by being visible to more audience within
                your city.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "40%", marginBottom: "1rem" }}>
            <div className="card-body pb-1">
              <div className="pt-2 pb-1">
                <img
                  src={image4}
                  className="img-fluid img-center"
                  style={{ height: "100px" }}
                  alt="Illustration"
                />
              </div>
              <h5 className="h4 lh-130 mb-3">Vegetables & Fruits</h5>
              <p className="text-muted mb-0">
                Increase your sales by being visible to more audience within
                your city.
              </p>
            </div>
          </div>

          <div className="card" style={{ width: "40%", marginBottom: "1rem" }}>
            <div className="card-body pb-1">
              <div className="pt-2 pb-1">
                <img
                  src={image2}
                  className="img-fluid img-center"
                  style={{ height: "100px" }}
                  alt="Illustration"
                />
              </div>
              <h5 className="h4 lh-130 mb-3">Food & Beverages</h5>
              <p className="text-muted mb-0">
                Increase your sales by being visible to more audience within
                your city.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "40%", marginBottom: "1rem" }}>
            <div className="card-body pb-1">
              <div className="pt-2 pb-1">
                <img
                  src={image3}
                  className="img-fluid img-center"
                  style={{ height: "100px" }}
                  alt="Illustration"
                />
              </div>
              <h5 className="h4 lh-130 mb-3">Pet Supplies</h5>
              <p className="text-muted mb-0">
                Increase your sales by being visible to more audience within
                your city.
              </p>
            </div>
          </div>

          {/* <div className="column" style="float:right;">
            <div className="row">
              <div className="card">
                <div className="card-body-con pb-1">
                  <div className="pt-6 pb-5">
                    <img
                      src="assets/img/svg/illustrations/a9.png"
                      className="img-fluid img-center"
                      style="height: 100px;"
                      alt="Illustration"
                    />
                  </div>
                  <h5 className="h4 lh-130 mb-3">Get more sales</h5>
                  <p className="text-muted mb-0">
                    Increase your sales by being visible to more audience within
                    your city.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </section>
      </div>
      <div className="position-relative" id="footer-main">
        <div className="footer pt-lg-7 footer-primary bg-primary">
          <div className="container pt-3">
            <div className="row">
              <div className="col-lg-6 mb-6 mb-lg-0">
                <span>
                  <h3 style={{ color: "white" }}>
                    <span style={{ color: "#ffffff" }}>Gravity</span>Bites
                  </h3>
                </span>
              </div>

              <div className="col-lg-3 col-6 col-sm-4 mb-5 mb-lg-0">
                <h6 className="heading mb-3" style={{ color: "#ffffff" }}>
                  <b>COMPANY</b>
                </h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" style={{ color: "black" }}>
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "black" }}>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "black" }}>
                      Term and Condition
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "black" }}>
                      Newslatter
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "black" }}>
                      Cookies
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0">
                <h6 className="heading mb-3" style={{ color: "#ffffff" }}>
                  <b>Social Media</b>
                </h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" style={{ color: "black" }}>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "black" }}>
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "black" }}>
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "black" }}>
                      YouTube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="divider divider-fade divider-dark my-4" />
            <div className="row align-items-center justify-content-md-between pb-4">
              <div className="col-md-6">
                <div className="copyright text-sm font-weight-bold text-center text-md-left">
                  &copy; 2022 <a href="#">GravityBites</a>. All rights reserved
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
