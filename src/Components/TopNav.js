import { React } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../actions/userActions";

function TopNav() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleLogout = () => {
    if (userInfo) {
      dispatch(logoutAction());
      history("/");
    }
  };
  return (
    <div className="topnav">
      <Link className="active hamburger" to="/wallet">
        <i className="fa-solid fa-fw fa-wallet"></i>Burger
      </Link>
      <Link className="active" to="/wallet">
        <i className="fa-solid fa-fw fa-wallet"></i>Wallet
      </Link>
      <Link
        className="active"
        to="/support"
        data-toggle="modal"
        data-target="#exampleModalLong"
      >
        <i className="fa-solid fa-fw fa-wallet"></i>Help
      </Link>
      <Link className="active" to="/">
        <i className="fa-solid fa-fw fa-wallet"></i>
        <button onClick={handleLogout}>Logout</button>
      </Link>
    </div>
  );
}

export default TopNav;
