import React from "react";
import GranteePortal from "./GranteePortal";
import GranteeSignin from "./GranteeSignIn";
import { makeStyles } from '@material-ui/core/styles';
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
    color: "blue"
  },
}));


const Grantee = ({ connect, getNFT_metadata }) => {
  const classes = useStyles();

  const GranteeUser = localStorage.getItem("GranteeProfile");
  console.log("Displaying Grantee User");
  console.log(GranteeUser);
  return (
    <div className={classes.root}>
      {GranteeUser ? <GranteePortal getNFT_metadata={getNFT_metadata} /> : <GranteeSignin connect={connect} />}
    </div>
  )
};





export default Grantee;
