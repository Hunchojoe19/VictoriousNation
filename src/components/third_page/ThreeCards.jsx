import { Box, Container, Grid, Modal } from "@mui/material";
import React from "react";
import scholarship from "../assets/images/scholarship.png";
import regular from "../assets/images/regular.png";
import supplies from "../assets/images/supplies.png";
import uniforms from "../assets/images/uniforms.png";
import items from "../assets/images/items.png";
import handsup from "../assets/images/handsup.png";
import Ja from "../assets/images/Ja.jpg";
import Jo from "../assets/images/Jo.jpg";
import Ignite from "../assets/images/ignite.png";
import NBGN from "../assets/images/NBGN.png";
import Flutterwave from "../assets/images/Flutterwave.png";
import paypal from "../assets/images/paypal.png";
// import Flutter from "./Flutter";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 600,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  p: 4,
};

const ThreeCards = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "120vh",
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
            <img src={Ja} alt="joe-ante" />
            <img src={Ignite} alt="ignite" />
            <img src={NBGN} alt="NBGN" />
            <img src={Jo} alt="joe-ante-foundation" />
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
              <button className="small-btn" onClick={handleOpen}>
                Give Now
              </button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div className="paypal">
                    <img src={paypal} alt="paypal-logo" />
                    <button
                      className="paypal-btn"
                      onClick={() => navigate("/paypal")}
                    >
                      Pay With Paypal
                    </button>
                  </div>
                  <div className="flutter">
                    <img src={Flutterwave} alt="flutterwave-logo" />
                    <button
                      className="flutter-btn"
                      onClick={() => navigate("/payment")}
                    >
                      Pay With Flutterwave
                    </button>
                  </div>
                </Box>
              </Modal>
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
        <Grid
          sx={{
            display: "flex",
            width: "95%",
            height: "500px",
            marginTop: "5rem",
          }}
        >
          <div className="nurses">
            <h2>Medical outreach</h2>
            <p>
              We provide medical, spiritual, and ﬁnancial support to the
              elderly, sexually abused victims, nursing mothers. Help us empower
              women and children who are victims of domestic violence and
              Gender-Based Violence by supplying basic food necessities and
              hygiene kits.
            </p>
            <button className="nurse-btn" onClick={handleOpen}>
              Give Now
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="paypal">
                  <img src={paypal} alt="paypal-logo" />
                  <button
                    className="paypal-btn"
                    onClick={() => navigate("/paypal")}
                  >
                    Pay With Paypal
                  </button>
                </div>
                <div className="flutter">
                  <img src={Flutterwave} alt="flutterwave-logo" />
                  <button
                    className="flutter-btn"
                    onClick={() => navigate("/payment")}
                  >
                    Pay With Flutterwave
                  </button>
                </div>
              </Box>
            </Modal>
          </div>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            width: "95%",
            height: "450px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="three-hands">
            <div className="three-divs">
              <img src={handsup} alt="hands up" />
              <h2>VOLUNTEER & GET INVOLVED</h2>
            </div>
            <div className="three-divs2">
              <div>
                <p>
                  Get involved in a variety of ways and become part of a team
                  that is changing the world one soul at a time.
                </p>
                <p id="call_us">Call Us</p>
                <p id="phone_no"> +1 (469) 449-6383</p>
              </div>
              <button className="register_card">Register</button>
            </div>
          </div>
        </Grid>
      </Container>
    </Box>
  );
};

export default ThreeCards;
