import React, { useContext } from 'react';
import { Typography, makeStyles, Container } from '@material-ui/core';
import Form from '../components/form';
import { FirestoreProvider } from 'react-firestore';

const useStyles = makeStyles((theme) => ({
  picture: {
    marginTop: '50px',
  },
  box: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  box2: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  root: {
    flexGrow: 1,
    background: '#e6f2ff',
    maxWidth: '500px',
    borderRadius: '10px',
  },
  helper: {
    fontSize: '15px',
  },
  button: {
    marginTop: '20px',
    marginBottom: '20px',
  },
}));

const MainPage = (props) => {
  const classes = useStyles();
  return (
    <Container align="center">
      <img className={classes.picture} src="./logo.png" alt="Młofa farmacja" />
      <Typography
        variant="h1"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Młoda Farmacja
      </Typography>

      <Form classes={classes} />
    </Container>
  );
};

export default MainPage;
