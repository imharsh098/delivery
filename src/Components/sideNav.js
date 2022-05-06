import { React, useState } from "react";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="sidenav">
      <div className="logo-containt">
        <ul className="nav-list" style={{ color: "black" }}>
          <li>
            <Link to="/order" style={{ color: "black", fontWeight: "650" }}>
              <i className="bx bxs-shopping-bag-alt"></i>
              <span className="links-name">Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/product" style={{ color: "black", fontWeight: "650" }}>
              <i className="bx bx-grid-alt"></i>
              <span className="links-name">Products</span>
            </Link>
          </li>
          <li>
            <Link to="/map" style={{ color: "black", fontWeight: "650" }}>
              <i className="bx bx-grid-alt"></i>
              <span className="links-name">MAPS</span>
            </Link>
          </li>
          <li>
            <Link to="/insight" style={{ color: "black", fontWeight: "650" }}>
              <i className="bx bx-bar-chart-alt"></i>
              <span className="links-name">Insights</span>
            </Link>
          </li>
          <li>
            <Link to="/reviews" style={{ color: "black", fontWeight: "650" }}>
              <i className="bx bx-grid-alt"></i>
              <span className="links-name">Review</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" style={{ color: "black", fontWeight: "650" }}>
              <i className="bx bx-cog"></i>
              <span className="links-name">Settings</span>
            </Link>
          </li>
          <li>
            <Link
              className="active"
              to="/terms"
              data-toggle="modal"
              data-target="#exampleModalLong"
              style={{ color: "black", fontWeight: "650" }}
            >
              <i className="bx bx-grid-alt"></i>
              <span className="links-name">Terms</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
