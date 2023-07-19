import { Box, Grid, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import joe from "../assets/images/joe.png";
import o1 from "../assets/images/o1.png";
import o2 from "../assets/images/o2.png";
import o3 from "../assets/images/o3.png";
import o4 from "../assets/images/o4.png";
import o5 from "../assets/images/o5.png";
import o6 from "../assets/images/o6.png";
import o7 from "../assets/images/o7.png";
import o8 from "../assets/images/o8.png";
import lead from "../assets/images/lead.png";
import appointment from "../assets/images/appointment.png";
import Footer from "../reusables/Footer";
import dayjs from "dayjs";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { DateTimePicker } from "@mui/x-date-pickers";
const styles = {
  width: "100%",
  height: "120vh",
};
const styledBox = {
  width: "100%",
  height: "150vh",
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 450,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState(dayjs());

  const [formValues, setFormValues] = useState({
    email: "",
    eventName: "",
    hostName: "",
    value: dayjs(),
  });

  return (
    <Box sx={styles}>
      <div className="profile_container">
        <h1>PASTOR JOSEPH ANTE</h1>
        <p>Lead Pastor, victorious nation church</p>
        <div className="div-btn">
          <button className="profile_btn">
            <a
              href="https://huncho-blog.web.app/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              View Profile
            </a>
          </button>
          <button className="profile_btn1" onClick={handleOpen}>
            Book Pastor Joe
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker", "DatePicker"]}>
                  <div className="date_pick">
                    <div className="date_picker">
                      <ValidatorForm
                        onSubmit={() =>
                          console.log({ formValues }, "submitted")
                        }
                        onError={(errors) => console.log(errors)}
                      >
                        <TextField
                          sx={{ width: "250px" }}
                          id="hostName"
                          label="Host Name"
                          variant="outlined"
                          value={formValues.hostName}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              hostName: e.target.value,
                            })
                          }
                        />
                        <TextField
                          sx={{ marginTop: "1rem", width: "250px" }}
                          id="eventName"
                          label="Event Name"
                          variant="outlined"
                          value={formValues.eventName}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              eventName: e.target.value,
                            })
                          }
                        />

                        <TextValidator
                          sx={{ marginTop: "1rem", width: "250px" }}
                          label="Email"
                          name="email"
                          value={formValues.email}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              email: e.target.value,
                            })
                          }
                          validators={["required", "isEmail"]}
                          errorMessages={[
                            "this field is required",
                            "email is not valid",
                          ]}
                        />

                        <DateTimePicker
                          sx={{ marginTop: "1rem" }}
                          label="Scehdule Time"
                          value={value}
                          minDate={dayjs()}
                          onChange={(newValue) =>
                            setFormValues({ ...formValues, value: newValue })
                          }
                          views={["year", "month", "day", "hours", "minutes"]}
                        />
                        <button className="book">Book</button>
                      </ValidatorForm>
                    </div>
                    <div className="appointment">
                      <h1>Let's Connect,</h1>
                      <h1>I'm Available</h1>
                      <img src={appointment} alt="joe" />
                    </div>
                  </div>
                </DemoContainer>
              </LocalizationProvider>
            </Box>
          </Modal>
        </div>
      </div>
      <Box sx={styledBox}>
        <Grid container sx={{ height: "500px" }}>
          <div className="grid_details">
            <div className="grid_details_p">
              <p>
                Joseph Ante is the Lead Pastor of The Victorious Nation Church,
                a non-denominational church founded in 2021 with a God-given
                mandate to ‘help connect people to the life-giving message of
                Jesus by refining an atmosphere of effective spiritual
                transformation’. <br />
                <br /> With over 10 years of experience as a Pastor, he is also
                a seasoned and highly sought-after speaker, trainer,
                entrepreneur, philanthropist, and consultant who has taught and
                inspired people in conferences and churches around the world.{" "}
                <br />
                <br />
                Joseph is happily married to Jorgina, who is also a minister of
                the gospel and co-lead pastor of the Victorious Nation Church.
                Together, they have two beautiful daughters, Jannai and Janina.
              </p>
            </div>
            <div className="grid_details_img">
              <img src={joe} alt="joe&family" />
            </div>
          </div>
        </Grid>
        <Grid
          sx={{
            width: "100%",
            height: "356px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <img src={lead} alt="pastor-joe" style={{ width: "100%" }} />
        </Grid>
        <Grid
          container
          sx={{
            height: "520px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "7rem",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", width: "80%" }}>
            <div
              style={{
                width: "800px",
                height: "300px",
                position: "absolute",
                // background: "blue",
                top: "100px",
                left: "490px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <h1
                style={{
                  color: "#FFF",
                  fontFamily: "Bebas Neue",
                  fontSize: "64px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  marginTop: "-5rem",
                }}
              >
                HAVE A SPEAKING ENGAGEMENT?
              </h1>
              <div
                style={{
                  marginTop: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button className="profile_btn" onClick={handleOpen}>
                  Book Appointment
                </button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DatePicker", "DatePicker"]}>
                        <div className="date_pick">
                          <div className="date_picker">
                            <ValidatorForm
                              onSubmit={() =>
                                console.log({ formValues }, "submitted")
                              }
                              onError={(errors) => console.log(errors)}
                            >
                              <TextField
                                sx={{ width: "250px" }}
                                id="hostName"
                                label="Host Name"
                                variant="outlined"
                                value={formValues.hostName}
                                onChange={(e) =>
                                  setFormValues({
                                    ...formValues,
                                    hostName: e.target.value,
                                  })
                                }
                              />
                              <TextField
                                sx={{ marginTop: "1rem", width: "250px" }}
                                id="eventName"
                                label="Event Name"
                                variant="outlined"
                                value={formValues.eventName}
                                onChange={(e) =>
                                  setFormValues({
                                    ...formValues,
                                    eventName: e.target.value,
                                  })
                                }
                              />

                              <TextValidator
                                sx={{ marginTop: "1rem", width: "250px" }}
                                label="Email"
                                name="email"
                                value={formValues.email}
                                onChange={(e) =>
                                  setFormValues({
                                    ...formValues,
                                    email: e.target.value,
                                  })
                                }
                                validators={["required", "isEmail"]}
                                errorMessages={[
                                  "this field is required",
                                  "email is not valid",
                                ]}
                              />

                              <DateTimePicker
                                sx={{ marginTop: "1rem" }}
                                label="Scehdule Time"
                                value={value}
                                minDate={dayjs()}
                                onChange={(newValue) =>
                                  setFormValues({
                                    ...formValues,
                                    value: newValue,
                                  })
                                }
                                views={[
                                  "year",
                                  "month",
                                  "day",
                                  "hours",
                                  "minutes",
                                ]}
                              />
                              <button className="book">Book</button>
                            </ValidatorForm>
                          </div>
                          <div className="appointment">
                            <h1>Let's Connect,</h1>
                            <h1>I'm Available</h1>
                            <img src={appointment} alt="joe" />
                          </div>
                        </div>
                      </DemoContainer>
                    </LocalizationProvider>
                  </Box>
                </Modal>
                <button className="profile_btn">
                  <a
                    href="https://huncho-blog.web.app/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    View Profile
                  </a>
                </button>
              </div>
            </div>
            <Grid
              item
              md={3}
              lg={3}
              sx={{
                width: "200px",
                height: "258px",
                // background: "red",
                backgroundImage: `url(${o1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundColor: "rgba(0, 0, 0, 0.80)",
                backgroundBlendMode: "darken",
              }}
            />
            <Grid
              item
              md={3}
              lg={3}
              sx={{
                width: "200px",
                height: "258px",
                // background: "blue",
                backgroundImage: `url(${o2})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundBlendMode: "darken",
                backgroundColor: "rgba(0, 0, 0, 0.80)",
              }}
            />
            <Grid
              item
              md={3}
              lg={3}
              sx={{
                width: "200px",
                height: "258px",
                backgroundImage: `url(${o3})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundColor: "rgba(0, 0, 0, 0.80)",
                backgroundBlendMode: "darken",
                // background: "green",
              }}
            />
            <Grid
              item
              md={3}
              lg={3}
              sx={{
                width: "200px",
                height: "258px",
                backgroundImage: `url(${o4})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundColor: "rgba(0, 0, 0, 0.80)",
                backgroundBlendMode: "darken",
                // background: "purple",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              width: "80%",
              height: "100%",

              margin: "0",
            }}
          >
            <Grid
              item
              md={3}
              lg={3}
              sx={{
                width: "200px",
                height: "258px",
                backgroundImage: `url(${o5})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundColor: "rgba(0, 0, 0, 0.80)",
                backgroundBlendMode: "darken",
                // background: "purple",
              }}
            />
            <Grid
              item
              md={3}
              lg={3}
              sx={{
                width: "200px",
                height: "258px",
                backgroundImage: `url(${o6})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundColor: "rgba(0, 0, 0, 0.80)",

                backgroundBlendMode: "darken",
                // background: "green",
              }}
            />
            <Grid
              item
              md={3}
              lg={3}
              sx={{
                width: "200px",
                height: "258px",
                backgroundImage: `url(${o7})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundColor: "rgba(0, 0, 0, 0.80)",

                backgroundBlendMode: "darken",
                // background: "blue",
              }}
            />
            <Grid
              item
              md={3}
              lg={3}
              sx={{
                width: "200px",
                height: "258px",
                backgroundImage: `url(${o8})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundBlendMode: "darken",
                backgroundColor: "rgba(0, 0, 0, 0.80)",
              }}
            />
          </div>
        </Grid>
      </Box>
      <div style={{ marginTop: "8rem" }}>
        <Footer />
      </div>
    </Box>
  );
};

export default Profile;
