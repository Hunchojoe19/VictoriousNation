import React from "react";
import "./footer.css";
import whiteLogo from "../assets/images/whiteLogo.png";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-main-contaier">
      <div className="footer-container">
        <div className="footer-empty-div"></div>
        <div className="content-container">
          <div className="image-div">
            <div className="img">
              <img src={whiteLogo} alt="vcn logo" />
            </div>
            <div style={{ height: "30px" }}></div>
            <div className="copyright">
              <p>&copy; Copyright Victorious Nation Church 2022</p>
            </div>
          </div>
          <div className="campus">
            <h3>Campuses</h3>
            <div style={{ height: "20px" }}></div>
            <div className="campus-countries">
              <p>U.S.A</p>
              <p>Nigeria</p>
              <p>Ghana</p>
              {/* <p>Gambia</p> */}
            </div>
          </div>
          <div style={{ width: "15%" }}></div>
          <div className="connect">
            <h3>Connect</h3>
            <div style={{ height: "15%" }}></div>
            <div className="social-media">
              <div className="facebook">
                <BsFacebook
                  size={25}
                  style={{ color: "white", cursor: "pointer" }}
                />
              </div>
              <div className="twitter">
                <BsTwitter
                  size={25}
                  style={{ color: "white", cursor: "pointer" }}
                />
              </div>
              <div className="linkedin">
                <BsLinkedin
                  size={25}
                  style={{ color: "white", cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
          <div style={{ width: "13%" }}></div>
          <div className="subscribe">
            <h3>Subscribe to get </h3>
            <h3>Latest Updates</h3>
            <div style={{ height: "90px" }}></div>
            <div className="btn-input">
              <div className="input">
                <input type="text" placeholder="Yourmail@gmail.com" />
              </div>
              <div className="next-div">
                <button className="btn-next">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
