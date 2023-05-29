import { Box, Card, CardContent } from "@mui/material";
import React from "react";
import Cards from "./Cards";
import "./next.css";

const NextPage = () => {
  return (
    <div>
      <Box sx={{ width: "100%", height: "120vh" }}>
        <div className="box-container">
          <Card sx={{ background: "transparent", height: 390 }} />
          <Card
            sx={{
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardContent>
              <h2>
                Same <p>Church,</p>
              </h2>
            </CardContent>
            <CardContent>
              <h2>
                Different <p>Locations.</p>
              </h2>
            </CardContent>
          </Card>
        </div>
      </Box>
      <Cards />
    </div>
  );
};

export default NextPage;
