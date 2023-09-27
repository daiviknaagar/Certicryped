import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UniversityPortalRahil from './UniversityPortalRahil';
import UniversityAuth from './UniversityAuth';
import UniversityWait from './UniversityWait';
import Trial from './Trial/Trial';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    width: '98vw',
  },
}));

const University = ({ mintCertificate, uploadFile }) => {
  const universityUser = localStorage.getItem('Universityprofile');
  // Parse the universityUser JSON string into an object
  const userObject = universityUser ? JSON.parse(universityUser) : null;
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      {!userObject && <Trial />}
      {userObject && userObject.result.isApproved && (
        <UniversityPortalRahil mintCertificate={mintCertificate} uploadFile={uploadFile} />
      )}
      {userObject && !userObject.result.isApproved && <UniversityWait />}
    </Box>
  );
};

export default University;
