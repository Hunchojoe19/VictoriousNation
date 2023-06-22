import { Box } from "@mui/material";
import React from "react";
const style = {
  width: "100%",
  height: "120vh",
};
const NextAbout = () => {
  return (
    <Box sx={style}>
      <div className="next_about">
        <h2>
          we are all about people, we serve god by his spirit, we pursue love in
          all things & we stay VICTORIOUS.
        </h2>
      </div>
      <div className="purple">
        <div className="purple-h2">
          <h2>About Us</h2>
          <p>
            The Victorious Nation Church, founded by Amb. Joseph Ante on June
            19, 2013, is an interdenominational organization dedicated to
            helping Christians, irrespective of the their denominations, to
            maximize their potential in all ramifications of life. We help meet
            their physical and spiritual needs by creating opportunities for
            transformational development in spirit, mind and soul. <br />
            <br />
            <br />
            We provide development programs stemming from three major
            convictions: Faith in and personal relationship with God cultivated
            and achieved through applying spiritual teachings to daily life and
            activities, the call to serve as our first duty being members of the
            society using relevant skills irrespective of their race, career,
            color or social stratification, and education to bring light to the
            world because it is as important to God as any other members of the
            Christian faith.
          </p>
        </div>
        <div className="mission">
          <h2>OUR MISSION</h2>
          <p>
            Here at the VNC, our message and mission is simply, to help connect
            people to the life giving message of Jesus. <br />
            <br />
            <br />
            Jesus is the head of our church, and His Word is the standard for
            how we live — as individuals and as God’s family — for the glory of
            God.
          </p>
        </div>
      </div>
    </Box>
  );
};

export default NextAbout;
