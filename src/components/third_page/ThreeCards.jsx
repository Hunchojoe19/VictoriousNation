import { Box, Container, Grid } from "@mui/material";
import React from "react";
import taskForce from "../assets/images/taskForce.png";
import ignite from "../assets/images/ignite.png";
import healthChat from "../assets/images/healthChat.png";

const ThreeCards = () => {
  return (
    <Box sx={{ width: "100%", height: "90vh" }}>
      <Container fixed>
        <Grid
          container
          marginTop={10}
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <div className="give_page-cards">
            <div className="first-card-gp">
              <img src={taskForce} alt="taskforce-logo" />
            </div>
            <div />
            <div className="second-card-gp">
              <img src={ignite} alt="mentorship-logo" />
            </div>
            <div />
            <div className="last-card-gp">
              <img src={healthChat} alt="health-logo" />
            </div>
          </div>
        </Grid>
      </Container>
    </Box>
  );
};

export default ThreeCards;
