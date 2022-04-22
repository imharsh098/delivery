import React from "react";
import PendingOrdercard from "./pendingOrdercard.js";
import AllOrdercard from "./AllOrdercard.js";

function Order() {
  // const orderData = useSelector((state) => state.productData);
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;
  // const { orders } = orderData;
  // const history = useNavigate();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (!userInfo) {
  //     history("/login");
  //   }
  //   if (userInfo) {
  //     dispatch(listorders());
  //   }
  // }, []);

  return (
    <div className="dashboard">
      <div className="orders">
        <div className="pending_order">
          <div className="color_line"></div>
          <div className="pending_cards">
            <PendingOrdercard />
            <PendingOrdercard />
            <PendingOrdercard />
            <PendingOrdercard />
          </div>
        </div>
        <div className="all_orders">
          <div className="color_line"></div>
          <div className="order-container">
            <AllOrdercard />
            <AllOrdercard />
            <AllOrdercard />
            <AllOrdercard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
