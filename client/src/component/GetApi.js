import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'black',
    minHeight: '20vh',
    justifyContent: 'center',
    alignContent: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '10px',
  },
  input: {
    marginRight: theme.spacing(1),
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
      '& input': {
        color: 'white', // Set the input text color to white
      },
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
  },
  button: {
    marginBottom: theme.spacing(1),
  },
}));

const GetApi = ({ getApiKey, uploadFile }) => {
  const classes = useStyles();
  const [metaData, setMetaData] = useState('okk');

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadFile();
  };

  const handleMetaDataChange = (e) => {
    setMetaData(e.target.value);
  };

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          className={classes.input}
          label="Meta Data"
          variant="outlined"
          value={metaData}
          onChange={handleMetaDataChange}
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
        >
          Click Me
        </Button>
      </form>
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        onClick={getApiKey}
      >
        Get API
      </Button>
    </div>
  );
};

export default GetApi;
