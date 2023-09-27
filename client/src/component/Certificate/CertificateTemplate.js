import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import logo from '../../images/54794.jpg';
import bgimg from "../../images/123.png";

const useStyles = makeStyles((theme) => ({
  certificateTemplate: {
    height: "100vh",
    width: "65vw",
    border:"5px solid black",
    backgroundImage: `url(${bgimg})`,
    backgroundSize:"cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: theme.spacing(2),
    borderRadius: '4px',
  },
  heading: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    color: '#007bff',
  },
  logo: {
    display: 'block',
    margin: '0 auto',
    marginBottom: theme.spacing(2),
    width: '150px',
  },
  info: {
    position: "relative",
    fontSize: '16px',
    marginBottom: theme.spacing(1),
    top: "410px",
    right: "0px"
    // marginTop: "400px",
    // marginRight: "px"
  },
}));

const CertificateTemplate = ({ name }) => {
  const classes = useStyles();

  return (
    <div className={classes.certificateTemplate}>
      {/* <img src={logo} alt="Logo" className={classes.logo} /> */}
      <Typography variant="body1" className={classes.info}>
        {name}
      </Typography>
    </div>
  );
};

export default CertificateTemplate;
