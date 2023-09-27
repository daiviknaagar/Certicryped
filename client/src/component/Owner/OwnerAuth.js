import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import OwnerSignIn from './OwnerSignIn';
import OwnerSignUp from './OwnerSignUp';
import { connect } from '../../functions';
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
    backgroundColor: "black",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
}));

const OwnerAuth = () => {
  const classes = useStyles();
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = () => {
    isSignUp = connect()
  };
  //   console.log(isSignUp);

  return (
    <div className={classes.root}>;
      <Button onClick={toggleSignUp} variant="contained" color="primary">
        {isSignUp ? 'Sign In' : 'Sign Up'}
      </Button>
      {isSignUp ? <OwnerSignUp /> : <OwnerSignIn />}
    </div>
  );
};

export default OwnerAuth;
