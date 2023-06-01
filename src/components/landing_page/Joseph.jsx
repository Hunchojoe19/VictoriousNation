import React from "react";
import JoePhoto from "./../assets/images/JoePhoto.png";
import { Container } from "@mui/material";
import Footer from "../reusables/Footer";

const Joseph = () => {
  return (
    <div className="joseph-container">
      <div className="joseph-support"></div>
      <Container maxWidth="xl" sx={{ height: "550px" }}>
        <div className="joseph-pic">
          <div className="image">
            <img src={JoePhoto} alt="joseph&jorginha" />
          </div>
          <div style={{ width: "20vw", height: "50px" }} />
          <div className="about-vcn">
            <h2>Pastor Joseph & Jorgina Ante</h2>
            <p>
              Here at the VNC, our message and mission is simply to help connect
              people to the life giving message of Jesus Christ by creating an
              atmosphere of effective spiritual transformation. Jesus Christ is
              the head of our church, and His Word is the standard for how we
              live as individuals and as God’s family. We’re all about people
              because God is all about people. One of the ways we express our
              love for Him is through our love for people. We want to serve the
              world around us, that is why we pursue Love in all things; it’s
              why we support missions all across the globe. We both celebrate
              and challenge the culture around us as we orient our lives around
              Jesus. Regardless of what your next step in faith is, we want you
              to know that you’re not alone; we want to help you take that next
              step into your VICTORY!
            </p>
          </div>
        </div>
      </Container>
      <Container maxWidth="xl" sx={{ height: "70vh" }}>
        <div className="church-relevant">
          <div className="relevance">
            <h2>A CHURCH RELEVANT TO OUR CULTURE</h2>
            <p>
              Our desire is certainly to be an “outward” facing church. As a
              result, we’re committed to serving the last, the lost, and least.
            </p>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Joseph;
