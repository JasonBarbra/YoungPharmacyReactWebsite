import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { auth } from '../config/firebase';
import styles from './LoginPage.styles';
import { useAuth } from '../contexts/AuthContext';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  makeStyles,
} from '@material-ui/core';
const useStyles = makeStyles(styles);

const LoginPage = () => {
  const { currentUser } = useAuth();
  const history = useHistory();
  const classes = useStyles();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const log = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(login, password)
      .then((cred) => {
        history.push('/Admin');
      })
      .catch((err) => {
        setLoginError(true);
      });
  };

  return (
    <Container align="center">
      <Box className={classes.root}>
        <form autoComplete="off" onSubmit={log}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Box className={classes.box}>
                <Typography variant="h5" className={classes.header}>
                  Zaloguj się aby uzyskać dostęp do zapisów
                </Typography>
                <Box className={classes.box}>
                  <LocalPharmacyIcon fontSize="large" color="primary" />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={classes.box}>
                <TextField
                  type="email"
                  label="Login"
                  variant="outlined"
                  color="primary"
                  required
                  onChange={(e) => setLogin(e.target.value)}
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={classes.box}>
                <TextField
                  label="Hasło"
                  variant="outlined"
                  color="primary"
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={classes.box}>
                {loginError && (
                  <Box className={classes.box}>
                    <Typography className={classes.error}>
                      Niepoprawny login lub hasło
                    </Typography>
                  </Box>
                )}
                <Button
                  className={classes.button}
                  type="submit"
                  color="primary"
                  variant="contained"
                >
                  Zaloguj
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;
