import React from "react";
import PendingOrdercard from "./pendingOrdercard.js";
import AllOrdercard from "./AllOrdercard.js";

function Order() {
  
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
