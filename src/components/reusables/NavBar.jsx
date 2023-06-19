import React from "react";
import "./navbar.css";
import whiteLogo from "../assets/images/whiteLogo.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <nav className="nav">
        <div className="navbar-div">
          <div style={{ width: "14%", height: "100%" }} />
          <div className="image-position">
            <div className="vcn-logo-part">
              <img src={whiteLogo} alt="Logo" />
            </div>
            <div className="victorious">
              <div className="both">
                <h4>VICTORIOUS</h4>
              </div>
              <div className="both">
                <p>nATION cHURCH</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "20vw", height: "100%" }} />
        <div className="menu-list">
          <div>
            <a href="/">Home</a>
          </div>
          <div>
            <a href="about/">About VNC</a>
          </div>
          <div>
            <a href="/nextpage">Campuses</a>
          </div>
          <div>
            <a href="contact/">Contact Us</a>
          </div>
        </div>
        <div className="butn">
          <button onClick={() => navigate("/donations")}>Give</button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
