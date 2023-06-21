import { Box, Container, Grid } from "@mui/material";
import React from "react";
import scholarship from "../assets/images/scholarship.png";
import regular from "../assets/images/regular.png";
import supplies from "../assets/images/supplies.png";
import uniforms from "../assets/images/uniforms.png";
import items from "../assets/images/items.png";

const ThreeCards = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        backgroundColor: "rgba(229, 229, 229, 0.25)",
        backgroundBlendMode: "multiply",
        marginTop: "7.5rem",
      }}
    >
      <Container fixed>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <div className="give_page-cards">
            {/* <div className="first-card-gp">
              <img src={taskForce} alt="taskforce-logo" />
            </div>
            <div />
            <div className="second-card-gp">
              <img src={ignite} alt="mentorship-logo" />
            </div>
            <div />
            <div className="last-card-gp">
              <img src={healthChat} alt="health-logo" />
            </div> */}
          </div>
        </Grid>
        <Grid
          sx={{
            display: "flex",

            width: "95%",
            height: "426px",
          }}
        >
          <div className="grid-box">
            <div className="small">
              <button className="small-btn">Give Now </button>
            </div>
            <div className="teacher">
              <h2>Education</h2>
              <p>
                Our main aim is to transform children-in-need into success
                stories. Help us write these stories by sponsoring a child’s
                education and changing their future. We have aligned ourselves
                with a network of educational facilities that have children whom
                are waiting for sponsors to believe in them and give them a
                chance to prove themselves.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  // justifyContent: "space-between",
                }}
              >
                <div className="scholarship">
                  <img src={scholarship} alt="scholarships" />
                  <p>paid tuition & schoLARSHIPS</p>
                </div>
                <div className="scholarship">
                  <img src={regular} alt="regular" />
                  <p>REGULAR MEALS</p>
                </div>
                <div className="scholarship">
                  <img src={supplies} alt="supplies" />
                  <p>SCHOOL SUPPLIES</p>
                </div>
                <div className="scholarship">
                  <img src={uniforms} alt="uniforms" />
                  <p>SCHOOL UNIFORMS</p>
                </div>
                <div className="scholarship">
                  <img src={items} alt="items" />
                  <p>OTHER ITEMS AS NEEDED</p>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Container>
    </Box>
  );
};

export default ThreeCards;
