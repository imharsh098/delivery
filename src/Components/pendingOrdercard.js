import React from "react";

function PendingOrdercard() {
  return (
    <div className="pending_card">
      <div className="order-address">
        Madhepura, AyyAPA Society Main Road, Hyd
      </div>
      <div className="card_info">
        <div className="card_item">
          <div className="ordernum">4568</div>
          <div className="orderprice">2 item for $ 24</div>
          <div className="received">Received 6 minutes ago</div>
        </div>
        <div className="img_delivered">
          <div>vjhb</div>
        </div>
      </div>
    </div>
  );
}

export default PendingOrdercard;
