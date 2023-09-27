import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tilt } from "react-tilt";
// import img from "../images/rm373batch2-04.jpg";
import {
  Box,
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  IconButton,
  Card,
  CardContent,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import Typed from "react-typed";
import universityImage from "./../images/university.png";
import granteeImage from "./../images/grantee.png";
import ownerImage from "./../images/owner.png";
const useStyles = makeStyles((theme) => ({
  homeBody: {
    position: "relative",
    // backgroundImage: `url(${img})`,
    backgroundColor: "black",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.3)", // Adjust the overlay color and opacity
    },
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  rightContent: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  homeText: {
    color: "#adff2f",
    // fontSize: "5rem",
    fontWeight: 700,
    margin: theme.spacing(2),
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
    fontFamily: "Söhne,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,Helvetica Neue,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
    fontSize: "6rem", // Adjust the font size
    lineHeight: 1.2, // Add line-height for better readability
    textAlign: "center", // Center align the text
    "@media (min-width: 600px)": {
      fontSize: "7rem", // Increase the font size for larger screens
    },
  },
  buttonText: {
    // color: theme.palette.primary.main,
    fontSize: "1.5rem",
    textTransform: "capitalize",
    marginTop: theme.spacing(2),
    textAlign: "center",
    fontFamily: "Papyrus",
  },
  loginButton: {
    marginTop: theme.spacing(17.5),
    width: "120px",

    // backgroundImage: "linear-gradient(to right, #4a47a3, #2c3e50)",
    backgroundColor: "#111",
    color: "white",
    transition: "background-color 0.3s ease-in-out",
    "&:hover": {
      // backgroundImage: "linear-gradient(to right, #2c3e50, #4a47a3)", // Adjust the gradient colors
      backgroundColor: "#333",
      // borderRadius: theme.spacing(100)
      // marginTop: theme.spacing(15.5)
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderRadius: theme.spacing(5),
    boxShadow: theme.shadows[5],
    opacity: "100%",
    outline: "none",
    maxWidth: "80%",
    width: "90%",
    position: "relative", // Added position relative
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch", // Adjust alignment to stretch
    marginTop: theme.spacing(4),
    position: "absolute",
    fontFamily: "Roboto",

    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  card: {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#1E1E1E", // Set a dark background color
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    color: theme.palette.common.white,
    transition: "background 0.3s ease-in-out",
    "&:hover": {
      background: "#555", // Set a highlight color on hover
    },

    flex: 1,
    minWidth: 0,
    borderRadius: theme.spacing(2), // Add some border radius
  },

  image: {
    width: "80px",
    height: "80px",
  },
  tiltCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#1E1E1E",
    height: "300px",
    width: "200px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    margin: theme.spacing(2),
    color: theme.palette.common.white,
    borderRadius: theme.spacing(2),
  },
}));

export default function Home() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOwnerClick = () => {
    navigate("/owner");
  };

  const handleUniversityClick = () => {
    navigate("/university");
  };

  const handleGranteeClick = () => {
    navigate("/grantee");
  };

  const handleLoginClick = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const defaultOptions = {
    reverse: true,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  return (
    <Box className={classes.homeBody}>
      {!open && ( // Conditionally render the Typography only if open is false
        <div>
          <Typography className={classes.homeText} variant="h1">
            <Typed
              strings={[
                "NFT Powered Credentials",
                "Decentralized Certificates",
                "Blockchain Accredition",
                "Money is Great"
              ]}
              typeSpeed={60}
              backSpeed={30}
              loop
              cursorRenderer={(cursor) => (
                <span style={{ color: "#FFFFFF" }}>{cursor}</span>
              )}
            />
          </Typography>
        </div>
      )}
      {!open && ( // Conditionally render the Typography only if open is false
        <Button
          className={classes.loginButton}
          variant="contained"
          color="primary"
          onClick={handleLoginClick}
        >
          Login
        </Button>
      )}

      <Modal
        className={classes.modal}
        open={open}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className={classes.modalContent}>
            <div className={classes.cardContainer}>
              <Tilt
                className={classes.tiltCard}
                options={defaultOptions}
              >
                <Card className={classes.card} onClick={handleOwnerClick}>
                  <IconButton aria-label="Owner Login">
                    <img
                      src={ownerImage}
                      alt="Owner"
                      className={classes.image}
                    />
                  </IconButton>
                  <CardContent>
                    <Typography className={classes.buttonText}>
                      Owner Login
                    </Typography>
                  </CardContent>
                </Card>
              </Tilt>
              <Tilt
                className={classes.tiltCard}
                options={defaultOptions}
              >
                <Card className={classes.card} onClick={handleUniversityClick}>
                  <IconButton aria-label="University Login">
                    <img
                      src={universityImage}
                      alt="University"
                      className={classes.image}
                    />
                  </IconButton>
                  <CardContent>
                    <Typography className={classes.buttonText}>
                      Institution Login
                    </Typography>
                  </CardContent>
                </Card>
              </Tilt>
              <Tilt
                className={classes.tiltCard}
                options={defaultOptions}
              >
                <Card className={classes.card} onClick={handleGranteeClick}>
                  <IconButton aria-label="Certificate Holder Login">
                    <img
                      src={granteeImage}
                      alt="Grantee"
                      className={classes.image}
                    />
                  </IconButton>
                  <CardContent>
                    <Typography className={classes.buttonText}>
                      Grantee Login
                    </Typography>
                  </CardContent>
                </Card>
              </Tilt>
            </div>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
