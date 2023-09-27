import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    height: '100vh',
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  text: {
    fontSize: '3rem',
    fontWeight: 'bold',
  },
}));

const UniversityWait = ({ mintCertificate, uploadFile }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <span className={classes.text}>University is Not yet Approved</span>
    </Box>
  );
};

export default UniversityWait;
