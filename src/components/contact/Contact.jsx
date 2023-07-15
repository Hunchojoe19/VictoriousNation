import React from "react";
import "./../landing_page/landingPage.css";
import { BsArrowDownShort } from "react-icons/bs";
import Box from "@mui/material/Box";
import Contact_Us from "./Contact_Us";
const styles = {
  width: "100%",
  height: "120vh",
};

const Contact = () => {
  return (
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
              marginTop: "3rem",
            }}
          />
        </div>
      </div>
      <div className="joe">
        <Contact_Us />
      </div>
    </Box>
  );
};

export default Contact;
