import { Box, Container, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import VNCLogo from "../assets/images/VNCLogo.png";
import opu from "../assets/images/opu.png";

const Cards = () => {
  return (
    <Box sx={{ width: "100%", height: 1500 }}>
      <Container maxWidth="xl">
        <div className="cards-card">
          <div className="card1">
            <Card
              sx={{
                width: "100%",
                height: "100%",
                border: "3px solid #C4437C",
              }}
            >
              <CardContent>
                <div className="card-content">
                  <div className="cards-img">
                    <img src={VNCLogo} alt="VNC logo" />
                  </div>
                  <div
                    style={{
                      height: "203px",
                      border: "1px solid #4A044F",
                      marginLeft: "3rem",
                      marginTop: ".6rem",
                    }}
                  />
                  <div>
                    <div>
                      <Typography
                        variant="h4"
                        sx={{
                          fontFamily: "Quicksand",
                          fontStyle: "normal",
                          fontWeight: "300",
                          fontSize: "35px",
                          lineHeight: "99%",
                          display: "flex",
                          alignItems: "center",
                          textAlign: "center",
                          color: "#4A044F",
                          marginTop: "3rem",
                          marginBottom: "1rem",
                        }}
                      >
                        Online Campus
                      </Typography>
                      <button className="cards-button">Join Online</button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardContent sx={{ marginTop: "2rem" }}>
                <Typography
                  sx={{
                    fontFamily: "Quicksand",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "23px",
                    lineHeight: "99%",
                    marginLeft: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    color: "#4A044F",
                    marginBottom: "1.5rem",
                  }}
                >
                  Pastor Joseph & Jorgina Ante
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Quicksand",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "22px",
                    lineHeight: "150%",
                    marginLeft: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    color: "#C4437C",
                    marginBottom: "1.5rem",
                  }}
                >
                  2936 A Griffin Ln Heartland, TX 75126 <br />
                  +1 (469) 514-0855
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="card1">
            <Card
              sx={{
                width: "100%",
                height: "100%",
                border: "3px solid #C4437C",
              }}
            >
              <CardContent>
                <div className="card-content">
                  <div className="cards-img">
                    <img src={VNCLogo} alt="VNC logo" />
                  </div>
                  <div
                    style={{
                      height: "203px",
                      border: "1px solid #4A044F",
                      marginLeft: "3rem",
                      marginTop: ".6rem",
                    }}
                  />
                  <div>
                    <div className="opu-image">
                      <img src={opu} alt="opulent" />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardContent sx={{ marginTop: "1.3rem" }}>
                <Typography
                  sx={{
                    fontFamily: "Quicksand",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "23px",
                    lineHeight: "99%",
                    marginLeft: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    color: "#4A044F",
                    marginBottom: "1rem",
                  }}
                >
                  Pastor Opulent & Gift Emmanuel
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Quicksand",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "22px",
                    lineHeight: "150%",
                    marginLeft: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "#C4437C",
                    marginBottom: "1.5rem",
                  }}
                >
                  37, Mary Hanney Rd, <br /> Oron, Akwa-Ibom State <br />
                  +234 706-484-8253
                </Typography>
              </CardContent>
            </Card>
          </div>
          {/* <div className="card3">
            <Card
              sx={{
                width: "100%",
                height: "100%",
                border: "3px solid #C4437C",
              }}
            >
              <CardContent>
                <div className="card-content">
                  <div className="cards-img">
                    <img src={VNCLogo} alt="VNC logo" />
                  </div>
                  <div
                    style={{
                      height: "203px",
                      border: "1px solid #4A044F",
                      marginLeft: "3rem",
                      marginTop: ".6rem",
                    }}
                  />
                  <div>
                    <div>
                      <Typography
                        variant="h4"
                        sx={{
                          fontFamily: "Quicksand",
                          fontStyle: "normal",
                          fontWeight: "300",
                          fontSize: "35px",
                          lineHeight: "99%",
                          display: "flex",
                          alignItems: "center",
                          textAlign: "center",
                          color: "#4A044F",
                          marginTop: "3rem",
                          marginBottom: "1rem",
                        }}
                      >
                        Online Campus
                      </Typography>
                      <button className="cards-button">Join Online</button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardContent sx={{ marginTop: "2rem" }}>
                <Typography
                  sx={{
                    fontFamily: "Quicksand",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "23px",
                    lineHeight: "99%",
                    marginLeft: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    color: "#4A044F",
                    marginBottom: "1.5rem",
                  }}
                >
                  Pastor Joseph & Jorgina Ante
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Quicksand",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "22px",
                    lineHeight: "150%",
                    marginLeft: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    color: "#C4437C",
                    marginBottom: "1.5rem",
                  }}
                >
                  2936 A Griffin Ln Heartland, TX 75126 <br />
                  +1 (469) 514-0855
                </Typography>
              </CardContent>
            </Card>
          </div> */}
        </div>
        <div className="upcoming-services">
          <Typography
            variant="h3"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Roboto Condensed",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "48px",
              lineHeight: "64px",
              textAlign: "center",
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              marginBottom: "3.5rem",
            }}
          >
            Upcoming Services
          </Typography>
        </div>
        <div className="small-cards">
          <div style={{ marginTop: "1rem" }}>
            <Card
              sx={{
                width: "18vw",
                height: "454px",
                background: "rgba(74, 4, 79, 0.1)",
              }}
            >
              <div className="cards1">
                <Typography className="typography" sx={{ margin: "2.5rem" }}>
                  This Month
                </Typography>
                <Typography
                  sx={{ margin: "-1rem 1rem", marginBottom: ".5rem" }}
                  className="typo"
                >
                  sunday <br />
                  services
                </Typography>
                <Typography
                  className="list-typo"
                  sx={{
                    marginLeft: "1rem",
                    marginTop: "1rem",
                    fontWeight: "700",
                    lineHeight: "150%",
                    fontSize: "20px",
                    fontFamily: "Roboto Condensed",
                    fontStyle: "normal",
                    letterSpacing: "-0.01em",
                    textTransform: "uppercase",
                  }}
                >
                  1st - New Beginnings <br />
                  2nd - kingdom dominion <br />
                  3rd - family life <br />
                  4th - upper room encounter <br />
                  5th - business/youth
                </Typography>
                <Typography></Typography>
              </div>
            </Card>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <Card sx={{ width: "18vw", background: "red", height: "454px" }}>
              <div></div>
            </Card>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <Card sx={{ width: "18vw", background: "red", height: "454px" }}>
              <div></div>
            </Card>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <Card sx={{ width: "18vw", background: "red", height: "454px" }}>
              <div></div>
            </Card>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default Cards;
