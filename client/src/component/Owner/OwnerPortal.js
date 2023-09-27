import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import img from "../../images/design.jpg";
import {
  getuniversites,
  updateUniversity,
  revokeUniversity,
} from "../../actions/universites";
import { useDispatch, useSelector } from "react-redux";
import { approve } from "../../functions";

const useStyles = makeStyles((theme) => ({
  ownerBody: {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: theme.spacing(4),
    borderRadius: theme.spacing(1),
  },
  universitiesContainer: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
    width: "100%",
    overflowY: "auto",
  },
  card: {
    marginBottom: theme.spacing(2),
    width: "100%",
    height: "auto",
    backgroundColor: "#424242",
    color: "white",
  },
}));

export default function Owner() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const universities = useSelector((store) => store.universites.universities);
  console.log(universities);
  const approvedUniversities = universities.filter(
    (university) => university.isApproved
  );

  const unapprovedUniversities = universities.filter(
    (university) => !university.isApproved
  );

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getuniversites());
    };

    fetchData();
  }, [dispatch]);

  const handleCardActionClick = async (university) => {
    if (university.isApproved) {
      const updatedUniversity = {
        ...university,
        isApproved: false,
      };
      let a = await approve(university.UniversityPublicKey);
      if (a) {
        await dispatch(updateUniversity(updatedUniversity));
      }
    } else {
      const updatedUniversity = {
        ...university,
        isApproved: true,
      };
      let a = await approve(university.UniversityPublicKey);
      if (a) {
        await dispatch(updateUniversity(updatedUniversity));
      }
    }
    await dispatch(getuniversites());
  };

  return (
    <Box className={classes.ownerBody}>
      <div className={classes.formContainer}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              style={{ color: "white" }}
            >
              Owner's Portal
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.universitiesContainer}>
              <Typography variant="h6">Approved Universities</Typography>
              {approvedUniversities.map((university) => (
                <Card className={classes.card} key={university._id}>
                  <CardContent>
                    <Typography variant="h6">
                      {university.UniversityName}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleCardActionClick(university)}
                    >
                      Revoke
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.universitiesContainer}>
              <Typography variant="h6">Unapproved Universities</Typography>
              {unapprovedUniversities.map((university) => (
                <Card className={classes.card} key={university._id}>
                  <CardContent>
                    <Typography variant="h6">
                      {university.UniversityName}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleCardActionClick(university)}
                    >
                      Approve
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
