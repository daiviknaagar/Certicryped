import React from "react";
import { Container, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { GranteeSignIn } from "../../actions/auth";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 64px)", // Subtract the height of the above navbar component
  },
  formContainer: {
    backgroundColor: "rgba(20, 20, 20, 0.8)",
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    height: "inherit",
    width: "70rem",
    color: "#ddd",
    fontSize: "2.5rem"
  },
  body: {
    backgroundColor: "black",
    width: "100%",
    height: "100%"
  }
}));

const GranteeSignin = ({ connect }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    let isConnected = false;
    isConnected = await connect();
    if (isConnected) {
      navigate("/granteeportal")
    }

  };

  const classes = useStyles();

  return (
    <div className={classes.body}>
      <Container maxWidth="sm" className={classes.container}>
        <div className={classes.formContainer}>
          <form onSubmit={handleFormSubmit}>
            <div style={{ display: "block", justifyContent: "center", textAlign: "center" }}>
              <div>Sign in to view your earned Certificates!</div>
              <Button style={{ width: "100%", fontSize: "1.05rem", color: "#bbb", fontWeight: "700" }} variant="contained" color="primary" type="submit">
                Sign In
              </Button>

            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default GranteeSignin;
