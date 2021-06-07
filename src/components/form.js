import React, { useState, useContext } from 'react';
import firebase from 'firebase';
import {
  Button,
  FormControl,
  TextField,
  Grid,
  Box,
  MenuItem,
  Select,
  FormHelperText,
} from '@material-ui/core';

const Form = ({ classes, firestore }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [year, setYear] = useState('Nie studiuje');
  const [member, setMember] = useState('Tak');

  const submitHandler = (e) => {
    e.preventDefault();
    const now = new Date();
    const sharer = {
      name: name,
      surname: surname,
      email: email,
      year: year,
      ismember: member,
      send_at: firebase.firestore.TimeStamp.fromDate(now),
    };
    console.log(sharer);

    const db = firebase.firestore();
    db.collection('webinar3').add(sharer);
  };

  return (
    <form noValidate autoComplete="off" onSubmit={submitHandler}>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Box className={classes.box}>
              <TextField
                onChange={(e) => setName(e.target.value)}
                label="Imię"
                variant="outlined"
                color="primary"
                required
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box className={classes.box}>
              <TextField
                onChange={(e) => setSurname(e.target.value)}
                label="Nazwisko"
                variant="outlined"
                color="primary"
                required
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className={classes.box}>
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                label="email"
                variant="outlined"
                color="primary"
                required
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box className={classes.box2}>
              <FormControl variant="outlined" fullWidth>
                <FormHelperText className={classes.helper}>Rok</FormHelperText>
                <Select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  displayEmpty
                >
                  <MenuItem value={'Nie studiuje'}>Nie studiuję</MenuItem>
                  <MenuItem value={'1'}>1</MenuItem>
                  <MenuItem value={'2'}>2</MenuItem>
                  <MenuItem value={'3'}>3</MenuItem>
                  <MenuItem value={'4'}>4</MenuItem>
                  <MenuItem value={'5'}>5</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box className={classes.box2}>
              <FormControl variant="outlined" fullWidth>
                <FormHelperText className={classes.helper}>
                  Członek Młodej Famracjii
                </FormHelperText>
                <Select
                  value={member}
                  onChange={(e) => setMember(e.target.value)}
                  displayEmpty
                >
                  <MenuItem value={'Tak'}>Tak</MenuItem>
                  <MenuItem value={'Nie'}>Nie</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
        <Button
          className={classes.button}
          type="submit"
          color="primary"
          variant="contained"
        >
          Zapisz
        </Button>
      </div>
    </form>
  );
};

export default Form;
