import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: "80px 60px",
    background: "#001F2E",
    position: "relative",
    bottom: 0,
    width: "100%",

    [theme.breakpoints.down("md")]: {
      padding: "70px 30px",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 1000,
    margin: "0 auto",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    marginLeft: 60,
  },
  row: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(185px, 1fr))",
    gridGap: 20,

    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    },
  },
  footerLink: {
    color: "#fff",
    marginBottom: 20,
    fontSize: 18,
    textDecoration: "none",

    "&:hover": {
      color: "green",
      transition: "200ms ease-in",
    },
  },
  heading: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 40,
    fontWeight: "bold",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <h1 style={{ color: "green", textAlign: "center", marginTop: "-50px" }}>
        GeeksforGeeks: A Computer Science Portal for Geeks
      </h1>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.column}>
            <p className={classes.heading}>About Us</p>
            <a href="#" className={classes.footerLink}>
              Mission
            </a>
            <a href="#" className={classes.footerLink}>
              Vision
            </a>
            <a href="#" className={classes.footerLink}>
              Values
            </a>
          </div>
          <div className={classes.column}>
            <p className={classes.heading}>Services</p>
            <a href="#" className={classes.footerLink}>
              Writing
            </a>
            <a href="#" className={classes.footerLink}>
              Internships
            </a>
            <a href="#" className={classes.footerLink}>
              Coding
            </a>
            <a href="#" className={classes.footerLink}>
              Teaching
            </a>
          </div>
          <div className={classes.column}>
            <p className={classes.heading}>Contact Us</p>
            <a href="#" className={classes.footerLink}>
              Email
            </a>
            <a href="#" className={classes.footerLink}>
              Phone
            </a>
            <a href="#" className={classes.footerLink}>
              Address
            </a>
            <a href="#" className={classes.footerLink}>
              Social Media
            </a>
          </div>
          <div className={classes.column}>
            <p className={classes.heading}>Social Media</p>
            <a href="#" className={classes.footerLink}>
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </a>
            <a href="#" className={classes.footerLink}>
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </a>
            <a href="#" className={classes.footerLink}>
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </a>
            <a href="#" className={classes.footerLink}>
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
