import { Box, Grid } from "@mui/material";
import React from "react";
import Footer from "../reusables/Footer";
const style = {
  width: "100%",
  height: "120vh",
  flexGrow: 1,
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
      <div className="our-beliefs">
        <div
          style={{
            width: "300px",
            height: "200px",
            display: "flex",
            justifyContent: "flex-start",
            marginLeft: "11.3rem",
          }}
        >
          <h2 className="h3">OUR BELIEFS</h2>
        </div>
        <Grid
          container
          spacing={1}
          sx={{
            height: "100%",
            // background: "blue",
            width: "80%",
            marginLeft: "11.3rem",
          }}
        >
          <Grid
            item
            sm={6}
            md={3}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "red",
                width: "350px",
                height: "120px",
                background: "rgba(196, 67, 124, 0.5)",
                borderRadius: "10px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "15px",
                lineHeight: "26px",
                /* identical to box height, or 177% */

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                letterSpacing: "-0.04em",

                color: "#FFFFFF",
              }}
            >
              The Scriptures Inspired
            </div>
          </Grid>
          <Grid
            item
            sm={6}
            md={3}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "red",
                width: "350px",
                height: "120px",
                background: "rgba(196, 67, 124, 0.5)",
                borderRadius: "10px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "15px",
                lineHeight: "26px",
                /* identical to box height, or 177% */

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                letterSpacing: "-0.04em",

                color: "#FFFFFF",
              }}
            >
              The One True God
            </div>
          </Grid>
          <Grid
            item
            sm={6}
            md={3}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "red",
                width: "350px",
                height: "120px",
                background: "rgba(196, 67, 124, 0.5)",
                borderRadius: "10px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "15px",
                lineHeight: "26px",
                /* identical to box height, or 177% */

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                letterSpacing: "-0.04em",

                color: "#FFFFFF",
              }}
            >
              The Diety Of The Lord Jesus Christ
            </div>
          </Grid>
          <Grid
            item
            sm={6}
            md={3}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "red",
                width: "350px",
                height: "120px",
                background: "rgba(196, 67, 124, 0.5)",
                borderRadius: "10px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "15px",
                lineHeight: "26px",
                /* identical to box height, or 177% */

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                letterSpacing: "-0.04em",

                color: "#FFFFFF",
              }}
            >
              The Fall Of Man
            </div>
          </Grid>
          <Grid
            item
            sm={6}
            md={3}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "red",
                width: "350px",
                height: "120px",
                background: "#C4437C",
                borderRadius: "10px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "15px",
                lineHeight: "26px",
                /* identical to box height, or 177% */

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                letterSpacing: "-0.04em",

                color: "#FFFFFF",
              }}
            >
              The Salvation Of Man
            </div>
          </Grid>
          <Grid
            item
            sm={6}
            md={3}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "red",
                width: "350px",
                height: "120px",
                background: "#C4437C",
                borderRadius: "10px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "15px",
                lineHeight: "26px",
                /* identical to box height, or 177% */

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                letterSpacing: "-0.04em",

                color: "#FFFFFF",
              }}
            >
              The Ordinances Of The Church
            </div>
          </Grid>
          <Grid
            item
            sm={6}
            md={3}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "red",
                width: "350px",
                height: "120px",
                background: "#C4437C",
                borderRadius: "10px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "15px",
                lineHeight: "26px",
                /* identical to box height, or 177% */

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                letterSpacing: "-0.04em",

                color: "#FFFFFF",
              }}
            >
              The Baptism In The Holy Ghost
            </div>
          </Grid>
          <Grid
            item
            sm={6}
            md={3}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "red",
                width: "350px",
                height: "120px",
                background: "#C4437C",
                borderRadius: "10px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "15px",
                lineHeight: "26px",
                /* identical to box height, or 177% */

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                letterSpacing: "-0.04em",
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              The Initial Physical Evidence Of The Baptism In The Holy Ghost
            </div>
          </Grid>
          <Grid
            item
            sm={6}
            md={3}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "red",
                width: "350px",
                height: "120px",
                background: "#4A044F",
                borderRadius: "10px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "15px",
                lineHeight: "26px",
                /* identical to box height, or 177% */

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                letterSpacing: "-0.04em",

                color: "#FFFFFF",
              }}
            >
              Sanctification
            </div>
          </Grid>
          <Grid
            item
            sm={6}
            md={3}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "red",
                width: "350px",
                height: "120px",
                background: "#4A044F",
                borderRadius: "10px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "15px",
                lineHeight: "26px",
                /* identical to box height, or 177% */

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                letterSpacing: "-0.04em",

                color: "#FFFFFF",
              }}
            >
              The Church and its Mission
            </div>
          </Grid>
          <Grid
            item
            sm={6}
            md={3}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "red",
                width: "350px",
                height: "120px",
                background: "#4A044F",
                borderRadius: "10px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "15px",
                lineHeight: "26px",
                /* identical to box height, or 177% */

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                letterSpacing: "-0.04em",

                color: "#FFFFFF",
              }}
            >
              The Ministry
            </div>
          </Grid>
          <Grid
            item
            sm={6}
            md={3}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "red",
                width: "350px",
                height: "120px",
                background: "#4A044F",
                borderRadius: "10px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "15px",
                lineHeight: "26px",
                /* identical to box height, or 177% */

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                letterSpacing: "-0.04em",

                color: "#FFFFFF",
              }}
            >
              Divine Healing
            </div>
          </Grid>
          <Grid
            item
            sm={6}
            md={3}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "red",
                width: "350px",
                height: "120px",
                background: "#17143E",
                borderRadius: "10px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "15px",
                lineHeight: "26px",
                /* identical to box height, or 177% */

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                letterSpacing: "-0.04em",

                color: "#FFFFFF",
              }}
            >
              The Blessed Hope
            </div>
          </Grid>
          <Grid
            item
            sm={6}
            md={3}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "red",
                width: "350px",
                height: "120px",
                background: "#17143E",
                borderRadius: "10px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "15px",
                lineHeight: "26px",
                /* identical to box height, or 177% */

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                letterSpacing: "-0.04em",

                color: "#FFFFFF",
              }}
            >
              The Millennial Reign Of Christ
            </div>
          </Grid>
          <Grid
            item
            sm={6}
            md={3}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "red",
                width: "350px",
                height: "120px",
                background: "#17143E",
                borderRadius: "10px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "15px",
                lineHeight: "26px",
                /* identical to box height, or 177% */

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                letterSpacing: "-0.04em",

                color: "#FFFFFF",
              }}
            >
              The Final Judgment
            </div>
          </Grid>
          <Grid
            item
            sm={6}
            md={3}
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "red",
                width: "350px",
                height: "120px",
                background: "#17143E",
                borderRadius: "10px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "15px",
                lineHeight: "26px",
                /* identical to box height, or 177% */

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                letterSpacing: "-0.04em",

                color: "#FFFFFF",
              }}
            >
              The New Heaven and The New Earth
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          height={400}
          sx={{
            background: "#1D184E",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <div className="leadership">
            <h2>OUR LEADERSHIP</h2>
          </div>
          <div className="leader">
            <p className="para">
              Our Church is led by Pastors Joseph and Jorgina Ante supported by
              a team of pastors and ministers who are committed to the
              Victorious Nation Church’s God-given mandate to make greatness
              common.
            </p>
          </div>
          <div className="lead-btn">
            <button>Meet Pastor Joseph</button>
          </div>
        </Grid>
        <Grid
          container
          sx={{
            minHeight: "70vh",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="relevant">
            <h2>A CHURCH RELEVANT TO OUR CULTURE</h2>
            <p>
              Our desire is certainly to be an “outward” facing church. As a
              result, we’re committed to serving the last, the lost, and least.
            </p>
          </div>
          <div className="the_three_cards">
            <div className="one-card"></div>
            <div className="two-card"></div>
            <div className="three-card"></div>
          </div>
        </Grid>
        <Footer />
      </div>
    </Box>
  );
};

export default NextAbout;
