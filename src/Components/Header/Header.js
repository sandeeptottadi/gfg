import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./gfg-log.png";
import "./styles.css";

export default function Header() {
  useEffect(() => {
    const sidebar = document.getElementById("sidebar");
    const sidebarOverlay = document.getElementById("sidebar-overlay");

    sidebarOverlay.addEventListener("click", () => {
      sidebar.classList.remove("sidebar-open");
      sidebarOverlay.classList.remove("sidebar-overlay-open");
    });

    const menubar = document.getElementById("menubar");
    const bar1 = document.getElementById("bar1");
    const bar2 = document.getElementById("bar2");
    const bar3 = document.getElementById("bar3");

    menubar.addEventListener("click", () => {
      //   console.log("Menu");
      if (sidebar.classList.contains("sidebar-open")) {
        sidebar.classList.remove("sidebar-open");
        sidebarOverlay.classList.remove("sidebar-overlay-open");
        bar1.classList.remove("bar1-open");
        bar2.classList.remove("bar2-open");
        bar3.classList.remove("bar3-open");
      } else {
        sidebar.classList.add("sidebar-open");
        sidebarOverlay.classList.add("sidebar-overlay-open");
        bar1.classList.add("bar1-open");
        bar2.classList.add("bar2-open");
        bar3.classList.add("bar3-open");
      }
    });
  });

  return (
    <div>
      <header className="section page-header">
        <div className="rd-navbar-wrap">
          <div className="rd-navbar-main">
            <div className="nav-logo-container">
              <div className="rd-navbar-brand">
                <a className="brand" href="./index.html">
                  <img src={logo} alt="" />
                </a>
              </div>
              <div className="menubar" id="menubar">
                <div id="bar1" className="bar1 bar"></div>
                <div id="bar2" className="bar2 bar"></div>
                <div id="bar3" className="bar3 bar"></div>
              </div>
            </div>
            <div className="sidebar-overlay" id="sidebar-overlay"></div>
            <div className="sidebar" id="sidebar">
              <div className="divider"></div>
              <div className="sidebar-items">
                <Link to="/">
                  <div className="sidebar-item">Home</div>
                </Link>
                <Link to="/events">
                  <div className="sidebar-item">Events</div>
                </Link>
                <Link to="/team">
                  <div className="sidebar-item active-item">Team</div>
                </Link>
                <Link to="/potw">
                  <div className="sidebar-item">POTW</div>
                </Link>
              </div>
            </div>
            <ul>
              <li className="rd-nav-item active">
                <Link to="/">Home</Link>
              </li>
              <li className="rd-nav-item">
                <Link to="/events">Events</Link>
              </li>
              <li className="rd-nav-item">
                <Link to="/team">Team</Link>
              </li>
              <li className="rd-nav-item">
                <Link to="/potw">POTW</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
