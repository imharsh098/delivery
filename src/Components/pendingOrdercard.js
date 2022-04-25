import React from "react";

function PendingOrdercard({ ele }) {
  return (
    <div className="pending_card">
      <div className="order-address">Madhepura {ele.address.address1}</div>
      <div className="card_info">
        <div className="card_item">
          <div className="ordernum">4568</div>
          <div className="orderprice">{ele.products.length} item for $ 24</div>
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
