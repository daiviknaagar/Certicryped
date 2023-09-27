import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "black",
    boxShadow: "none",
    position: "sticky",
    top: "10px",
    width: "100%",
    backgroundImage: "linear-gradient(to bottom, #1E1E1E, #1F1F1F,)"

  },
  navbarBrand: {
    textDecoration: "none",
    color: "#fff",
    fontWeight: "bolder",
    fontFamily: "Arial, sans-serif",
    "&:hover": {
      color: "#adff2f",
    },
  },
  toolbar: {
    // border:"1px solid white",
    // borderBottom: "1px solid #ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    flex: "1.3",
    // border: "1px solid white",
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
    // flexGrow: 1,

  },
  logo: {
    textDecoration: "none",
    color: "#999",
    fontSize: "2rem",
    fontWeight: "bolder",
    fontFamily: "Arial, sans-serif",
    "&:hover": {
      color: "#fff",
    },
  },
  rightSection: {
    // border:"1px solid white",
    flex: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logoutButton: {
    color: "#999",
    fontSize: "1rem",
    textTransform: "none",
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
    "&:hover": {
      color: "#fff",
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT", data: null });
    window.location.reload();
  };

  const ownerProfile = localStorage.getItem("OwnerProfile");
  const universityProfile = localStorage.getItem("Universityprofile");

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Container>
          <Toolbar className={classes.toolbar}>
            <div className={classes.logoContainer}>
              <Typography
                variant="h5"
                component={Link}
                to="/"
                className={classes.logo}
              >
                Certicryp
              </Typography>
            </div>

            <div className={classes.rightSection}>
              {ownerProfile || universityProfile ? (
                <Button
                  color="inherit"
                  onClick={handleLogout}
                  className={classes.logoutButton}
                >
                  Logout
                </Button>
              ) : null}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
