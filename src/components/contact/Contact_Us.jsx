import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  ToggleButton,
  ToggleButtonGroup,
  createTheme,
} from "@mui/material";
import line from "../assets/images/line.png";
import Nigeria from "../assets/images/Nigeria.png";
import USA from "../assets/images/USA.png";
import addressIcon from "../assets/images/addressIcon.png";
import clockIcon from "../assets/images/clockIcon.png";
import EmailIcon from "../assets/images/EmailIcon.png";
import "./contact.css";
import React, { useState } from "react";
import callIcon from "../assets/images/callIcon.png";
import { ThemeProvider } from "@emotion/react";
import Footer from "../reusables/Footer";
const styles = {
  width: "100%",
  height: "120vh",
};
const gridStyles = {
  width: "70%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  margin: "auto auto",
};
// const toggleStyles = makeStyles({
//   root: {
//     width: "300px",
//     height: "100px",
//     borderRadius: "10px",
//     boxShadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.25)",
//     "&:hover": {
//       color: "white",
//       background: "#c4437c",
//     },
//   },
// });
const theme = createTheme({
  palette: {
    primary: {
      main: "#c4437c",
    },
    secondary: {
      main: "rgba(0, 0, 0, 0.50)",
    },
  },
});

const Contact_Us = () => {
  const [options, setOptions] = useState("one");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    options: "",
    message: "",
  });

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOptions = (event, newOptions) => {
    setOptions(newOptions);
  };
  // const classes = toggleStyles();

  return (
    <Box sx={styles}>
      <Grid container sx={gridStyles}>
        <div className="contact_us_div">
          <h2>Contact Us</h2>
          <p> Connect with the right people at The Victorious Nation Church</p>
        </div>
        <div className="line-div">
          <img src={line} alt="line" className="line" />
        </div>
        <Box sx={{ width: "100%", height: "800px" }}>
          <div className="box">
            <div className="box1">
              <h2>how can we help You today?</h2>
              <ToggleButtonGroup
                orientation="vertical"
                value={options}
                exclusive
                onChange={handleOptions}
                aria-activedescendant="text formatting"
              >
                <ToggleButton
                  selected
                  value="one"
                  sx={{
                    margin: "20px",
                    color: "blue",
                    background: " #C4437C",
                    width: "300px",
                    height: "100px",
                    borderRadius: "10px",
                    boxShadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.25)",
                    "&:hover": {
                      color: "white",
                      background: "#c4437c",
                    },
                  }}
                  // className={classes.root}
                >
                  I need prayer.
                </ToggleButton>
                <ToggleButton
                  selected
                  value="two"
                  sx={{
                    margin: "20px",
                    width: "300px",
                    height: "100px",
                    borderRadius: "10px",
                    boxShadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.25)",
                    "&:hover": {
                      color: "white",
                      background: "#c4437c",
                    },
                  }}

                  // className={classes.root}
                >
                  I’d like to share my story.
                </ToggleButton>
                <ToggleButton
                  selected
                  value="three"
                  sx={{
                    margin: "20px",
                    width: "300px",
                    height: "100px",
                    borderRadius: "10px",
                    boxShadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.25)",
                    "&:hover": {
                      color: "white",
                      background: "#c4437c",
                    },
                  }}
                  // className={classes.root}
                >
                  I accepted Christ for the first time.
                </ToggleButton>
                <ToggleButton
                  selected
                  value="four"
                  sx={{
                    margin: "20px",
                    width: "300px",
                    height: "100px",
                    borderRadius: "10px",
                    boxShadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.25)",
                    "&:hover": {
                      color: "white",
                      background: "#c4437c",
                    },
                  }}
                  // className={classes.root}
                >
                  I’d like to get baptized.
                </ToggleButton>
                <ToggleButton
                  selected
                  value="five"
                  sx={{
                    margin: "20px",
                    width: "300px",
                    height: "100px",
                    borderRadius: "10px",
                    boxShadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.25)",
                    "&:hover": {
                      color: "white",
                      background: "#c4437c",
                    },
                  }}
                  // className={classes.root}
                >
                  I have a question.
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div className="box2">
              <div className="box-2-input">
                <h2>Contact info*</h2>
                <div className="input-field">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleFormChange}
                    className="user_input"
                  />
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleFormChange}
                    className="user_input"
                  />
                </div>
                <div className="input-field1">
                  <input
                    type="text"
                    placeholder="Email Address"
                    name="email"
                    value={form.email}
                    onChange={handleFormChange}
                    className="user_input"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={form.phoneNumber}
                    onChange={handleFormChange}
                    className="user_input"
                  />
                </div>
                <div className="radio">
                  <FormControl>
                    <ThemeProvider theme={theme}>
                      <FormLabel
                        id="demo-radio-buttons-group-label"
                        color="secondary"
                      >
                        What campus do you worship?
                      </FormLabel>

                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="U.S.A (iCampus)"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio color="primary" />}
                          label="U.S.A (iCampus)"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio color="primary" />}
                          label="Nigeria"
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio color="primary" />}
                          label="I don’t attend VNC"
                        />
                      </RadioGroup>
                    </ThemeProvider>
                  </FormControl>
                </div>
                <div className="text">
                  <p>Please provide us more details.</p>
                  <textarea
                    className="text-area"
                    placeholder="Please type your message here"
                  />
                </div>
                <button className="text-button">Submit</button>
              </div>
            </div>
          </div>
        </Box>
        <Box sx={{ width: "100%", height: "40vh", marginTop: "5rem" }}>
          <div className="box_icons">
            <div className="call">
              <img src={callIcon} alt="phone icon" />
              <p
                style={{
                  marginTop: "1.5rem",
                  color: "#000",
                  textAlign: "center",
                  leadingTrim: "both",
                  textEdge: "cap",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "222%",
                }}
              >
                Call Us
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "1rem",
                  color: "#000",
                  textAlign: "center",
                  leadingTrim: "both",
                  textEdge: "cap",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "300",
                  lineHeight: "222%",
                }}
              >
                <img src={Nigeria} alt="nigeria" />
                <p
                  style={{
                    marginLeft: "1rem",
                    color: "#000",
                    textAlign: "center",
                    leadingTrim: "both",
                    textEdge: "cap",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "300",
                    lineHeight: "222%",
                  }}
                >
                  +234-706-484-8253
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "1rem",
                }}
              >
                <img src={USA} alt="Usa" style={{ marginLeft: "-1rem" }} />
                <p style={{ marginLeft: "1rem" }}>+1 (469)-449-6383</p>
              </div>
            </div>
            <div className="email">
              <img src={EmailIcon} alt="phone icon" />
              <p
                style={{
                  marginTop: "1.5rem",
                  color: "#000",
                  textAlign: "center",
                  leadingTrim: "both",
                  textEdge: "cap",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "222%",
                }}
              >
                Enquiries
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "1rem",
                  color: "#000",
                  textAlign: "center",
                  leadingTrim: "both",
                  textEdge: "cap",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "300",
                  lineHeight: "222%",
                }}
              >
                {/* <img src={Nigeria} alt="nigeria" /> */}
                <a
                  href="mailto:contact@thevnc.church"
                  style={{
                    textDecoration: "none",
                    marginLeft: "1rem",
                    color: "#000",
                    textAlign: "center",
                    leadingTrim: "both",
                    textEdge: "cap",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "300",
                    lineHeight: "222%",
                  }}
                >
                  contact@thevnc.church
                </a>
              </div>
              {/* <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "1rem",
                }}
              >
                <img src={USA} alt="Usa" style={{ marginLeft: "-1rem" }} />
                <p style={{ marginLeft: "1rem" }}>+1 (469)-449-6383</p>
              </div> */}
            </div>
            <div className="address">
              <img src={addressIcon} alt="phone icon" />
              <p
                style={{
                  marginTop: "1.5rem",
                  color: "#000",
                  width: "100%",
                  textAlign: "center",
                  leadingTrim: "both",
                  textEdge: "cap",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "222%",
                }}
              >
                Address
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "1rem",
                  color: "#000",
                  textAlign: "center",
                  leadingTrim: "both",
                  textEdge: "cap",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "300",
                  lineHeight: "222%",
                }}
              >
                <img src={Nigeria} alt="nigeria" />
                <p
                  style={{
                    color: "#000",
                    textAlign: "center",
                    leadingTrim: "both",
                    textEdge: "cap",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "300",
                    lineHeight: "140%",
                  }}
                >
                  37, Mary Hanney Rd, Oron,Akwa-Ibom State, Nigeria.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "1rem",
                }}
              >
                <img src={USA} alt="Usa" />
                <p style={{ marginLeft: "1rem" }}>
                  2936 A Griffin Ln Heartland, Texas TX 75126 U.S.A
                </p>
              </div>
            </div>
            <div className="clock">
              <img src={clockIcon} alt="phone icon" />
              <p
                style={{
                  marginTop: "1.5rem",
                  color: "#000",
                  textAlign: "center",
                  leadingTrim: "both",
                  textEdge: "cap",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "222%",
                }}
              >
                Working Hours
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "1rem",
                  color: "#000",
                  textAlign: "center",
                  leadingTrim: "both",
                  textEdge: "cap",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "300",
                  lineHeight: "222%",
                }}
              >
                <p
                  style={{
                    marginLeft: "1rem",
                    color: "#000",
                    textAlign: "center",
                    leadingTrim: "both",
                    textEdge: "cap",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "300",
                    lineHeight: "222%",
                  }}
                >
                  Mon - Fri. 08:30 - 17:00
                </p>
              </div>
            </div>
          </div>
        </Box>
      </Grid>
      <div style={{ marginTop: "23rem" }}>
        <Footer />
      </div>
    </Box>
  );
};

export default Contact_Us;
