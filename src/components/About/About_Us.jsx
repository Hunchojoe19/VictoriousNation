import React from "react";
import "./about.css";
import { Box, CardContent } from "@mui/material";
import NextAbout from "./NextAbout";

const styles = {
  width: "100%",
  height: "120vh",
};

const About_Us = () => {
  return (
    <Box sx={styles}>
      <div className="about_us_container">
        <div className="one"></div>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>
            One <p>People,</p>
          </h2>
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>
            Serving <p>God.</p>
          </h2>
        </CardContent>
      </div>
      <NextAbout />
    </Box>
  );
};

export default About_Us;
