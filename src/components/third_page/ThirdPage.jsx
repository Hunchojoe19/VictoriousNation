import { Box, Card, CardContent, Grid } from "@mui/material";
import React from "react";
import "./third.css";
import ThreeCards from "./ThreeCards";
import Footer from "../reusables/Footer";
import Hope from "../../components/assets/images/Hope.png";
import Faith from "../../components/assets/images/Faith.png";
import Love from "../../components/assets/images/Love.png";

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
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "300",
                fontSize: "19px",

                color: "#FFFFFF",
                marginRight: "2rem",
              }}
            >
              Food
            </p>
            <span
              style={{
                color: "#FFF212",
                fontSize: "2rem",
                fontWeight: "bold",
                marginLeft: "2rem",
                marginBottom: "1rem",
              }}
            >
              .
            </span>
            <p
              style={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "300",
                fontSize: "19px",
                color: "#FFFFFF",
                marginLeft: "2rem",
              }}
            >
              Education
            </p>
            <span
              style={{
                color: "#FFF212",
                fontSize: "2rem",
                fontWeight: "bold",
                marginLeft: "2rem",
                marginBottom: "1rem",
              }}
            >
              .
            </span>
            <p
              style={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "300",
                fontSize: "19px",
                color: "#FFFFFF",
                marginLeft: "2rem",
              }}
            >
              Asylum
            </p>
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
            marginTop: "2rem",
            // background: "green",
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div className="hope-div">
            <img src={Hope} alt="hope" />
            <h2>HOPE</h2>
            <p>
              Many people have suffered under abuse and rejection. The most
              powerful gift you can give towards restoration, is the Gospel of
              Christ. Only through God’s love can they achieve the potential
              they have been called to.
            </p>
          </div>
          <div
            style={{
              border: "1px solid #D9D9D9",
              width: "2px",
              height: "450px",
            }}
          />
          <div className="faith-div">
            <img src={Faith} alt="faith" />
            <h2>Faith</h2>
            <p>
              Through your sponsorship, you are not only supporting education,
              you are also sowing the Gospel into their lives, strengthening
              their faith. Every beneficiary is mentored by a local church and
              introduced to the love of Christ.
            </p>
          </div>
          <div
            style={{
              border: "1px solid #D9D9D9",
              width: "2px",
              height: "450px",
            }}
          />
          <div className="love-div">
            <img src={Love} alt="love" />
            <h2>Love</h2>
            <p>
              Our focus are the vulnerable and introducing them to a place of
              acceptance, love and support. Their success becomes our success
              and you can be a part of it through your sponsorship.
            </p>
          </div>
        </div>
      </div>
      <ThreeCards />
      <Footer />
    </Box>
  );
};

export default ThirdPage;
