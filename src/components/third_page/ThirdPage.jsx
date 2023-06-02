import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import "./third.css";
import ThreeCards from "./ThreeCards";
import Footer from "../reusables/Footer";

const ThirdPage = () => {
  return (
    <Box sx={{ height: "160vh", width: "100%" }}>
      <Grid container className="givecontainer">
        <Grid item className="thirdPage_text" />
        <Card sx={{ background: "transparent", height: 390 }} />
        <Card
          sx={{
            backgroundColor: "transparent",
            width: "100%",
            marginTop: "-20rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "15rem",
          }}
        >
          <CardContent>
            <h2>
              Giving <p>Generously,</p>
            </h2>
          </CardContent>
          <CardContent>
            <h2>
              Reaping <p>Victoriously.</p>
            </h2>
          </CardContent>
        </Card>
      </Grid>
      <div
        style={{
          width: "100%",
          height: "350px",
        }}
      >
        <div
          style={{
            marginTop: "4rem",
            // background: "green",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Bebas Neue",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "180%",
              marginBottom: "1rem",
              textTransform: "uppercase",

              background: "linear-gradient(90deg, #C4437C 2.57%, #4A044F 100%)",
              webkitBackgroundClip: "text",
              webkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
              backgroundBlendMode: "multiply",
            }}
          >
            THANK YOU FOR YOUR GENEROUSITY
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "300",
              fontSize: "19px",
              lineHeight: "180%",

              display: "flex",
              alignItems: "center",
              textAlign: "center",

              color: "#000000",
            }}
          >
            We appreciate you for taking ownership in what God is doing through
            the VNC. <br />
            Your giving is making a difference in this church, our community,
            and the world.
            <br /> We are sure that God’s promises will be fulfilled through
            your generosity. <br />
            Please choose a fund to give towards and enter an amount for your
            gift.
          </Typography>
        </div>
      </div>
      <ThreeCards />
      <Footer />
    </Box>
  );
};

export default ThirdPage;
