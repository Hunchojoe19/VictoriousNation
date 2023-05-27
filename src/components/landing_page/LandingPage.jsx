import React from "react";
import "./landingPage.css";
import { BsArrowDownShort } from "react-icons/bs";
import Joseph from "./Joseph";
import Box from "@mui/material/Box";
const styles = {
  width: "100%",
  height: "120vh",
};
const LandingPage = () => {
  return (
    <div>
      <Box sx={styles}>
        <div className="landingPage-holding">
          <div className="one"></div>
          <div className="two">
            <h2>Welcome to</h2>
            <div>
              <p>
                The
                <span
                  style={{
                    color: "#FFF212",
                    marginLeft: "1rem",
                    paddingRight: "1rem",
                    fontWeight: "500",
                  }}
                >
                  Victorious
                </span>
                Family
              </p>
            </div>
          </div>

          <div className="one">
            <BsArrowDownShort
              size={40}
              style={{
                color: "white",
                marginLeft: "-10rem",
                marginTop: "2rem",
              }}
            />
          </div>
        </div>
        <div className="joe">
          <Joseph />
        </div>
      </Box>
    </div>
  );
};

export default LandingPage;
