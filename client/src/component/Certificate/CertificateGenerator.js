import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CertificateTemplate from './CertificateTemplate';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    margin: theme.spacing(4),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
  input: {
    marginBottom: theme.spacing(2),
    width: '300px',
  },
  generateButton: {
    marginBottom: theme.spacing(2),
    width: '200px',
  },
  certificateContainer: {
    marginTop: theme.spacing(6),
  },
}));

const CertificateGenerator = () => {
  const classes = useStyles();
  const certificateRef = useRef();

  const generateCertificate = ({ name }) => {
    html2canvas(certificateRef.current).then((canvas) => {
      canvas.toBlob((blob) => {
        saveAs(blob, 'certificate.png');
      });
    });
  };

  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    generateCertificate({ name });
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h1">
        Certificate Generator
      </Typography>
      <div className={classes.certificateContainer} ref={certificateRef}>
        <CertificateTemplate name={name} />
      </div>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={classes.input}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.generateButton}
        >
          Generate Certificate
        </Button>
      </form>
    </div>
  );
};

export default CertificateGenerator;
