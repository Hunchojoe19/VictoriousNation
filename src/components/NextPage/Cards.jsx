import {
  Box,
  Container,
  Card,
  Typography,
  Grid,
  CardContent,
} from "@mui/material";
import React from "react";
import Footer from "../reusables/Footer";
import { RiMapPin3Line } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";

const Cards = () => {
  return (
    <Box sx={{ width: "100%", height: 1500 }}>
      <Container>
        <div className="cards-card">
          <div className="card1">
            <Card
              sx={{
                width: "70rem",
                height: "100%",
                border: "none",
                boxShadow: "none",
              }}
            >
              <CardContent
                sx={{
                  width: "100%",
                  height: "100%",
                  marginBottom: "5rem",
                }}
              >
                <div className="flyer-card">
                  <div className="flyer-card1"></div>
                  <div className="flyer-card2">
                    <button>Join Online</button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="card2">
            <Card
              sx={{
                width: "100%",
                height: "100%",
                boxShadow: "none",
              }}
            >
              <CardContent
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <div className="flyer-card">
                  <div className="flyer2-card1"></div>
                </div>
              </CardContent>
            </Card>
          </div>
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
      </Container>

      <div className="small-cards">
        <Container
          maxWidth="xl"
          style={{ height: "500px", marginBottom: "5rem" }}
        >
          <Grid container spacing={2} style={{ width: "104%", height: "100%" }}>
            <Grid item xs={12} sm={6} md={3}>
              <div style={{ marginTop: "1rem" }}>
                <Card
                  sx={{
                    width: "18vw",
                    height: "480px",
                    background: "rgba(74, 4, 79, 0.1)",
                  }}
                >
                  <div className="cards1">
                    <Typography
                      className="typography"
                      sx={{ margin: "2.5rem" }}
                    >
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
                      variant="h6"
                      className="list-typo"
                      sx={{
                        marginLeft: "1rem",
                        marginTop: "1rem",
                        fontWeight: "700",
                        lineHeight: "150%",
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
                    <Typography
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        lineHeight: "1.6",
                      }}
                    >
                      <AiOutlineClockCircle
                        size={20}
                        style={{ marginLeft: "2rem", marginTop: "1rem" }}
                      />
                      <Typography
                        paragraph
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignSelf: "center",
                          marginLeft: ".5rem",
                          marginTop: ".5rem",
                        }}
                      >
                        1st Service - 07:00 GMT +1 <br />
                        2nd Service - 08:30 GMT +1
                      </Typography>
                    </Typography>
                    <Typography
                      style={{
                        display: "flex",
                        justifyContent: "start",
                      }}
                    >
                      <RiMapPin3Line
                        size={20}
                        style={{ marginLeft: "2rem", marginTop: "1rem" }}
                      />
                      <Typography
                        paragraph
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignSelf: "center",
                          marginLeft: ".5rem",
                          marginTop: ".5rem",
                        }}
                      >
                        37, Mary Hanney Rd, Oron, <br />
                        Akwa-Ibom State, Nigeria.
                      </Typography>
                    </Typography>
                  </div>
                </Card>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div style={{ marginTop: "1rem" }}>
                <div style={{ marginTop: "1rem" }}>
                  <Card
                    sx={{
                      width: "18vw",
                      height: "480px",
                      background: "rgba(74, 4, 79, 0.1)",
                    }}
                  >
                    <div className="cards1">
                      <Typography
                        className="typography"
                        sx={{ margin: "2.5rem" }}
                      >
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
                        variant="h6"
                        className="list-typo"
                        sx={{
                          marginLeft: "1rem",
                          marginTop: "1rem",
                          fontWeight: "700",
                          lineHeight: "150%",
                          fontFamily: "Roboto Condensed",
                          fontStyle: "normal",
                          letterSpacing: "-0.01em",
                          textTransform: "uppercase",
                        }}
                      >
                        THERE IS NOTHING IMPOSSIBLE
                      </Typography>
                      <Typography
                        paragraph
                        style={{
                          marginLeft: "1rem",
                          height: "20%",
                        }}
                      >
                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. */}
                      </Typography>
                      <Typography
                        style={{
                          display: "flex",
                          justifyContent: "start",
                          lineHeight: "1.6",
                        }}
                      >
                        <AiOutlineClockCircle
                          size={20}
                          style={{ marginLeft: "2rem", marginTop: "1rem" }}
                        />
                        <Typography
                          paragraph
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignSelf: "center",
                            marginLeft: ".5rem",
                            marginTop: ".8rem",
                          }}
                        >
                          Fridays 17:30 GMT +1
                        </Typography>
                      </Typography>
                      <Typography
                        style={{
                          display: "flex",
                          justifyContent: "start",
                        }}
                      >
                        <RiMapPin3Line
                          size={20}
                          style={{ marginLeft: "2rem", marginTop: "2.3rem" }}
                        />
                        <Typography
                          paragraph
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignSelf: "center",
                            marginLeft: ".5rem",
                            marginTop: "1.8rem",
                          }}
                        >
                          37, Mary Hanney Rd, Oron, <br />
                          Akwa-Ibom State, Nigeria.
                        </Typography>
                      </Typography>
                    </div>
                  </Card>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div style={{ marginTop: "1rem" }}>
                <Card
                  sx={{
                    width: "18vw",
                    height: "480px",
                    background: "rgba(74, 4, 79, 0.1)",
                  }}
                >
                  <div className="cards1">
                    <Typography
                      className="typography"
                      sx={{ margin: "2.5rem" }}
                    >
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
                      variant="h6"
                      className="list-typo"
                      sx={{
                        marginLeft: "1rem",
                        marginTop: "1rem",
                        fontWeight: "700",
                        lineHeight: "150%",
                        fontFamily: "Roboto Condensed",
                        fontStyle: "normal",
                        letterSpacing: "-0.01em",
                        textTransform: "uppercase",
                      }}
                    >
                      THERE IS NOTHING IMPOSSIBLE
                    </Typography>
                    <Typography
                      paragraph
                      style={{
                        marginLeft: "1rem",
                        height: "20%",
                      }}
                    >
                      {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. */}
                    </Typography>
                    <Typography
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        lineHeight: "1.6",
                      }}
                    >
                      <AiOutlineClockCircle
                        size={20}
                        style={{ marginLeft: "2rem", marginTop: "1rem" }}
                      />
                      <Typography
                        paragraph
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignSelf: "center",
                          marginLeft: ".5rem",
                          marginTop: ".5rem",
                        }}
                      >
                        Friday 23:39 IST <br />
                        Saturday 11:20 ISD
                      </Typography>
                    </Typography>
                    <Typography
                      style={{
                        display: "flex",
                        justifyContent: "start",
                      }}
                    >
                      <RiMapPin3Line
                        size={20}
                        style={{ marginLeft: "2rem", marginTop: "1rem" }}
                      />
                      <Typography
                        paragraph
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignSelf: "center",
                          marginLeft: ".5rem",
                          marginTop: ".5rem",
                        }}
                      >
                        37, Mary Hanney Rd, Oron, <br />
                        Akwa-Ibom State, Nigeria.
                      </Typography>
                    </Typography>
                  </div>
                </Card>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div style={{ marginTop: "1rem" }}>
                <Card
                  sx={{
                    width: "18vw",
                    height: "480px",
                    background: "rgba(74, 4, 79, 0.1)",
                  }}
                >
                  <div className="cards1">
                    <Typography
                      className="typography"
                      sx={{ margin: "2.5rem" }}
                    >
                      This Month
                    </Typography>
                    <Typography
                      sx={{ margin: "-1rem 1rem", marginBottom: ".5rem" }}
                      className="typo"
                    >
                      Upcoming
                      <br />
                      Event
                    </Typography>
                    <Typography
                      variant="h6"
                      className="list-typo"
                      sx={{
                        marginLeft: "1rem",
                        marginTop: "1rem",
                        fontWeight: "700",
                        lineHeight: "150%",
                        fontFamily: "Roboto Condensed",
                        fontStyle: "normal",
                        letterSpacing: "-0.01em",
                        textTransform: "uppercase",
                      }}
                    >
                      Celebrating freedom and life
                    </Typography>
                    <Typography
                      paragraph
                      style={{
                        marginLeft: "1rem",
                        height: "20%",
                      }}
                    >
                      {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. */}
                    </Typography>
                    <Typography
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        lineHeight: "1.6",
                      }}
                    >
                      <AiOutlineClockCircle
                        size={20}
                        style={{ marginLeft: "2rem", marginTop: "1rem" }}
                      />
                      <Typography
                        paragraph
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignSelf: "center",
                          marginLeft: ".5rem",
                          marginTop: ".5rem",
                        }}
                      >
                        Friday 23:39 IST <br />
                        Saturday 11:20 ISD
                      </Typography>
                    </Typography>
                    <Typography
                      style={{
                        display: "flex",
                        justifyContent: "start",
                      }}
                    >
                      <RiMapPin3Line
                        size={20}
                        style={{ marginLeft: "2rem", marginTop: "1rem" }}
                      />
                      <Typography
                        paragraph
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignSelf: "center",
                          marginLeft: ".5rem",
                          marginTop: ".5rem",
                        }}
                      >
                        37, Mary Hanney Rd, Oron, <br />
                        Akwa-Ibom State, Nigeria.
                      </Typography>
                    </Typography>
                  </div>
                </Card>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div style={{ marginTop: "3rem" }}>
        <Footer />
      </div>
    </Box>
  );
};

export default Cards;
