import PendingOrdercard from "./pendingOrdercard.js";
import AllOrdercard from "./AllOrdercard.js";

import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listorders } from "../actions/orderActions";
import TopNav from "./TopNav";
import SideNav from "./sideNav";

function Order() {
  const orderData = useSelector((state) => state.orderData);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading } = userLogin;
  const { orders } = orderData;
  const history = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!userInfo) {
      history("/");
    }
    if (userInfo) {
      dispatch(listorders());
      console.log(orders);
    }
  }, []);

  return (
    <div>
      <TopNav />
      <div className="main">
        <SideNav />
        <div className="dashboard">
          <div className="orders">
            <div className="pending_order">
              <div className="color_line"></div>
              <div className="pending_cards">
                {orders.map((ele) => {
                  return <PendingOrdercard ele={ele} />;
                })}
              </div>
            </div>
            <div className="all_orders">
              <div className="color_line"></div>
              <div className="order-container">
                {orders.map((ele) => {
                  return <AllOrdercard ele={ele} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
