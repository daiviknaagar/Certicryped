import React, { useState } from "react";
import { Container, TextField, Button } from "@material-ui/core";
import * as api from "../../api/index";
import { useDispatch } from "react-redux";
import { UniversitySignIn } from "../../actions/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import bgvideo from "../../images/AjarJaggedClumber.mp4";
import {connect} from "./../../functions";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 64px)", // Subtract the height of the above navbar component
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
  },
  login: {
    textAlign: "left",
    paddingLeft: "20px",
    fontFamily: "Roboto",
    fontSize: "XX-large",
    fontWeight: "bold"
    }
}));

const UniversitySignInRahil = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    UniversityEmail: "",
    UniversityPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    console.log("outside");
    const a = await connect();

    if(a)
    {
      console.log(dispatch(UniversitySignIn(formData, navigate)));
    }
  };

  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="sm" className={classes.container}>
        <div className={classes.formContainer}>
          <p className={classes.login}> Login </p>
          <form onSubmit={handleFormSubmit}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              name="UniversityEmail"
              value={formData.UniversityEmail}
              onChange={handleInputChange}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              name="UniversityPassword"
              value={formData.UniversityPassword}
              onChange={handleInputChange}
            />
            <Button variant="contained" color="primary" type="submit">
              Sign In
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default UniversitySignInRahil;
