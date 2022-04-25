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
    <div class="topnav">
      <Link class="active hamburger" to="/wallet">
        <i class="fa-solid fa-fw fa-wallet"></i>Burger
      </Link>
      <Link class="active" to="/wallet">
        <i class="fa-solid fa-fw fa-wallet"></i>Wallet
      </Link>
      <Link
        class="active"
        to="/support"
        data-toggle="modal"
        data-target="#exampleModalLong"
      >
        <i class="fa-solid fa-fw fa-wallet"></i>Help
      </Link>
      <Link class="active" to="/">
        <i class="fa-solid fa-fw fa-wallet"></i>
        <button onClick={handleLogout}>Logout</button>
      </Link>
    </div>
  );
}

export default TopNav;
