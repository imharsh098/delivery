import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./sideNav.css";

function SideNav() {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div className="sidenav">
      <div id="wrapper" className={isActive ? "active" : null}>
        <div id="sidebar-wrapper">
          <ul id="sidebar_menu" className="sidebar-nav">
            <li className="sidebar-brand">
              <a id="menu-toggle" href="#" onClick={toggleClass}>
                Menu
                <span
                  id="main_icon"
                  className="glyphicon glyphicon-align-justify"
                ></span>
              </a>
            </li>
          </ul>
          <ul className="sidebar-nav" id="sidebar">
            <li>
              <a>
                Orders
                <span className="sub_icon glyphicon glyphicon-shopping-cart"></span>
              </a>
            </li>
            <li>
              <a>
                Products
                <span className="sub_icon glyphicon glyphicon-gift"></span>
              </a>
            </li>
            <li>
              <a>
                Insights
                <span className="sub_icon glyphicon glyphicon-signal"></span>
              </a>
            </li>
            <li>
              <a>
                Reviews
                <span className="sub_icon glyphicon glyphicon-star"></span>
              </a>
            </li>
            <li>
              <a>
                Settings
                <span className="sub_icon glyphicon glyphicon-cog"></span>
              </a>
            </li>
            <li>
              <a id="nav-terms" style={{ borderBottom: "2px solid limegreen" }}>
                Terms
                <span className="sub_icon glyphicon glyphicon-thumbs-up"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
