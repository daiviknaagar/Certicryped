import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import img from "../images/rm373batch2-04.jpg";
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
  Button,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { AccountCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  homeBody: {
    position: "relative",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    // backgroundImage: `url(${img})`,
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
    backgroundColor: "transparent",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  homeText: {
    color: "#FFFFFF",
    fontSize: "5rem",
    fontWeight: 900,
    margin: theme.spacing(2),
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
    fontFamily: "Roboto",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(4),
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
    cursor: "pointer",
  },
  buttonText: {
    color: theme.palette.primary.main,
    fontSize: "1.5rem",
    textTransform: "capitalize",
    marginTop: theme.spacing(2),
  },
  loginButton: {
    marginTop: theme.spacing(4),
  },
}));

export default function Login() {
  const classes = useStyles();
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


  return (
    <Box className={classes.homeBody}>
      <div className={classes.contentContainer}>
        <div className={classes.cardContainer}>
          <Card className={classes.card} onClick={handleOwnerClick}>
            <IconButton aria-label="Owner Login">
              <AccountCircle fontSize="large" />
            </IconButton>
            <CardContent>
              <Typography className={classes.buttonText}>
                Owner Login
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.card} onClick={handleUniversityClick}>
            <IconButton aria-label="University Login">
              <AccountCircle fontSize="large" />
            </IconButton>
            <CardContent>
              <Typography className={classes.buttonText}>
                University Login
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.card} onClick={handleGranteeClick}>
            <IconButton aria-label="Certificate Holder Login">
              <AccountCircle fontSize="large" />
            </IconButton>
            <CardContent>
              <Typography className={classes.buttonText}>
                Certificate Holder Login
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      
    </Box>
  );
}
