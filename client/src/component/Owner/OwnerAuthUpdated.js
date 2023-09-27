import React, { useState } from 'react';
import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { OwnerSignIn } from "../../actions/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { connect } from '../../functions';
// import img from "../../images/5040007.jpg";

// import { login } from './actions'; // Assuming you have an 'actions' file that exports the login action

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 64px)", // Subtract the height of the above navbar component
  },
  title: {
    marginBottom: theme.spacing(3),
    color: '#ddd',
    fontSize: "2.5rem",
    fontWeight: 0.5,
  },
  button: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1.5, 4),
  },
  formContainer: {
    backgroundColor: "rgba(20, 20, 20, 0.8)",
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    height: "inherit",
    width: "40rem",
    color: "#ddd",
    fontSize: "2.5rem"
  },
}));

const OwnerAuthUpdated = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    OwnerEmail: "rahildeepakgodha@gmail.com",
    OwnerPassword: "Rahil@05082003",
  });

  const handleLogin = async () => {
    const a = await connect();
    console.log(a)
    if (a) dispatch(OwnerSignIn(formData, navigate));
  };

  return (
    <Box maxWidth="sm" className={classes.container}>
      <div className={classes.formContainer}>
        <div style={{ display: "block", justifyContent: "center", textAlign: "center" }}>
          <Typography className={classes.title} variant="h4" component="h1">
            Authorized Personnel <span style={{ fontWeight: "600", color: "red" }}>ONLY</span>
          </Typography>
          <Button className={classes.button} variant="contained" color="primary" onClick={handleLogin} style={{ width: "100%", fontSize: "1.05rem", color: "#bbb", fontWeight: "700" }}>
            Login
          </Button>
        </div>
      </div>
    </Box>
  );
};

//  return (
//     <div className={classes.body}>
//       <Container maxWidth="sm" className={classes.container}>
//         <div className={classes.formContainer}>
//           <form onSubmit={handleFormSubmit}>
//             <div style={{ display: "block", justifyContent: "center", textAlign: "center" }}>
//               <div>Sign in to view your earned Certificates!</div>
//               <Button style={{ width: "100%", fontSize: "1.05rem", color: "#bbb", fontWeight: "700" }} variant="contained" color="primary" type="submit">
//                 Sign In
//               </Button>

//             </div>
//           </form>
//         </div>
//       </Container>
//     </div>
//   );
// };

export default OwnerAuthUpdated;
