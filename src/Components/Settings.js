import React from "react";
import TopNav from "./TopNav";
import SideNav from "./sideNav";

function Settings() {
  return (
    <div>
      <TopNav />
      <div className="main">
        <SideNav />
        <div className="dashboard">
          <div>Settings</div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
