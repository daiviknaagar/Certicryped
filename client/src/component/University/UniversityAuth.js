import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UniversitySignupRahil from './UniversitySignupRahil';
import UniversitySignInRahil from './UniversitySignInRahil';
import img from "../../images/5040007.jpg";


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '98.9vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${img})`, // Update the background image with linear gradient overlay
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
}));

const UniversityAuth = () => {
  const classes = useStyles();
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className={classes.root}>
      <Button onClick={toggleSignUp} variant="contained" color="primary">
        {isSignUp ? 'Sign In' : 'Sign Up'}
      </Button>
      {isSignUp ? <UniversitySignupRahil /> : <UniversitySignInRahil />}
    </div>
  );
};

export default UniversityAuth;