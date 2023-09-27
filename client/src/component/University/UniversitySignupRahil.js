import React, { useState } from "react";
import { Container, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { UniversitySignUp } from "../../actions/auth";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  container: {
    // border: "1px solid white",
    height: "100%",
    width: "100%",
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
}));

const UniversitySignupRahil = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    UniversityName: "",
    UniversityEmail: "",
    UniversityPassword: "",
    UniversityConfirmPassword: "",
    Branch: "",
    UniversityPublicKey: "",
    BranchPublicKey: "",
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
    dispatch(UniversitySignUp(formData, navigate));
  };

  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="sm" className={classes.container}>
        <div className={classes.formContainer}>
          <form onSubmit={handleFormSubmit}>
            <TextField
              label="Name of University"
              variant="outlined"
              fullWidth
              margin="normal"
              name="UniversityName"
              value={formData.UniversityName}
              onChange={handleInputChange}
            />
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
            <TextField
              label="Confirm Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              name="UniversityConfirmPassword"
              value={formData.UniversityConfirmPassword}
              onChange={handleInputChange}
            />
            <TextField
              label="Branch"
              variant="outlined"
              fullWidth
              margin="normal"
              name="Branch"
              value={formData.Branch}
              onChange={handleInputChange}
            />
            <TextField
              label="University Public Key"
              variant="outlined"
              fullWidth
              margin="normal"
              name="UniversityPublicKey"
              value={formData.UniversityPublicKey}
              onChange={handleInputChange}
            />
            <TextField
              label="Branch Public Key"
              variant="outlined"
              fullWidth
              margin="normal"
              name="BranchPublicKey"
              value={formData.BranchPublicKey}
              onChange={handleInputChange}
            />
            <Button variant="contained" color="primary" type="submit">
              Sign Up
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default UniversitySignupRahil;
