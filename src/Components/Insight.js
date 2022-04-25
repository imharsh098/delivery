import { React } from "react";
import TopNav from "./TopNav";
import SideNav from "./sideNav";

function Insight() {
  return (
    <div>
      <TopNav />
      <div className="main">
        <SideNav />
        <div className="dashboard">
          <div>Insight</div>
        </div>
      </div>
    </div>
  );
}

export default Insight;
