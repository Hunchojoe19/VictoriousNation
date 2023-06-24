import React from "react";
import JoePhoto from "./../assets/images/JoePhoto.png";
import { Container, Box } from "@mui/material";
import Footer from "../reusables/Footer";
import victory1 from "../assets/images/victory1.png";
import victory2 from "../assets/images/victory2.png";

const Joseph = () => {
  return (
    <Box>
      <div className="joseph-container">
        <div className="joseph-support"></div>
        <Container maxWidth="xl" sx={{ height: "600px" }}>
          <div className="joseph-pic">
            <div className="image">
              <img src={JoePhoto} alt="joseph&jorginha" />
            </div>
            <div style={{ width: "20vw", height: "50px" }} />
            <div className="about-vcn">
              <h2>Pastor Joseph & Jorgina Ante</h2>
              <p>
                Here at the VNC, our message and mission is simply to help
                connect people to the life giving message of Jesus Christ by
                creating an atmosphere of effective spiritual transformation.
                Jesus Christ is the head of our church, and His Word is the
                standard for how we live as individuals and as God’s family.
                We’re all about people because God is all about people. One of
                the ways we express our love for Him is through our love for
                people. We want to serve the world around us, that is why we
                pursue Love in all things; it’s why we support missions all
                across the globe. We both celebrate and challenge the culture
                around us as we orient our lives around Jesus. Regardless of
                what your next step in faith is, we want you to know that you’re
                not alone; we want to help you take that next step into your
                VICTORY!
              </p>
            </div>
          </div>
        </Container>
        <Container maxWidth="xl" sx={{ height: "100vh" }}>
          <div
            className="church-relevant"
            style={{ height: "344px", marginBottom: "5rem" }}
          >
            <div className="image1">
              <img src={victory1} alt="victory-logo" />
            </div>
            <div className="image2">
              <img src={victory2} alt="victory-logo" />
            </div>
          </div>
          <div className="belief-cards">
            <div className="belief-card1">
              <h4>Our Beliefs</h4>
            </div>
            <div className="belief-card2"></div>
            <div className="belief-card3"></div>
          </div>
        </Container>
        <Footer />
      </div>
    </Box>
  );
};

export default Joseph;
