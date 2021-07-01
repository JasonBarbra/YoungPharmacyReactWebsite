import React, { useState, useEffect } from 'react';
import { auth, db } from '../config/firebase';
import styles from './AdminPage.styles';
import firebase from '../config/firebase';
import SaveIcon from '@material-ui/icons/Save';
import { format } from 'date-fns';
import BlockIcon from '@material-ui/icons/Block';
import CheckIcon from '@material-ui/icons/Check';
import { useForm } from '../contexts/FormContext';
import EmailIcon from '@material-ui/icons/Email';
import ToDoList from '../components/toDoList';
import { useHistory } from 'react-router';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import list from '../consts/list';
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

const AdminPage = () => {
  const history = useHistory();
  const [personCounter, SetPersonCounter] = useState(0);
  const [title, setTitle] = useState('');
  const [displayInfo, setDisplayInfo] = useState(false);
  const { formStatus, changeStatus } = useForm();
  const [jason, setJason] = useState([]);
  const classes = useStyles(formStatus);
  useEffect(() => {
    db.collection('webinar3')
      .orderBy('send_at', 'desc')
      .get()
      .then((snapshot) => {
        SetPersonCounter(snapshot.docs.length);
        snapshot.docs.forEach((doc) => {
          let newField = doc.data();
          const when = format(newField.send_at.toDate(), 'd.MMMM.yyyy');
          newField.send_at = when;
          setJason((jason) => [...jason, newField]);
        });
      })
      .catch(() => console.log('brak dostepu do danych'));
  }, []);

  const changeTitle = () => {
    const now = new Date();
    const titleinfo = {
      title: title,
      send_at: firebase.firestore.Timestamp.fromDate(now),
    };
    db.collection('title')
      .add(titleinfo)
      .then(() => {
        console.log('title added');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const download = () => {
    setDisplayInfo(true);
    const { Parser } = require('json2csv');
    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(jason);

    let hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';

    //provide the name for the CSV file to be downloaded
    hiddenElement.download = 'webinar.csv';
    hiddenElement.click();
  };

  const setEmail = () => {
    window.open('https://dashboard.emailjs.com/admin/templates');
  };
  const logout = () => {
    auth.signOut();
    history.push('/');
  };

  return (
    <Grid container align="center" direction="column">
      <Container align="center" className={classes.root}>
        <Grid item xs={12}>
          <Box className={classes.box}>
            <Typography variant={'h3'} className={classes.header}>
              Obecnie zapisanych : {personCounter}
              <form autoComplete="off">
                <Grid item xs={12}>
                  <Box className={classes.box}>
                    <TextField
                      variant={'outlined'}
                      label={'Tytuł'}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box className={classes.box}>
                    <Button
                      variant={'outlined'}
                      color="primary"
                      onClick={changeTitle}
                    >
                      Zmień Tytuł
                    </Button>
                  </Box>
                </Grid>
              </form>
            </Typography>
          </Box>
        </Grid>
      </Container>
      <Container align="center" className={classes.root2}>
        <Grid item xs={12}>
          <Box className={classes.box}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              onClick={download}
              startIcon={<SaveIcon />}
            >
              Pobierz
            </Button>
          </Box>
        </Grid>
        {displayInfo && (
          <Grid item xs={12}>
            <Box className={classes.box}>
              <Typography>
                Pobrano plik w formacie CSV aby otworzyć go w excelu należy:
              </Typography>
              <ToDoList data={list} icon={<CheckIcon />} />
            </Box>
          </Grid>
        )}
        <Grid item xs={12}>
          <Box className={classes.box}>
            <Button
              variant="contained"
              size="small"
              onClick={changeStatus}
              className={classes.isActive}
              startIcon={formStatus ? <CheckIcon /> : <BlockIcon />}
            >
              {formStatus ? 'odblokuj' : 'zablokuj'}
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={classes.box}>
            <Button
              variant="contained"
              size="small"
              onClick={setEmail}
              className={classes.email}
              startIcon={<EmailIcon />}
            >
              Ustaw email
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={classes.box}>
            <Button
              variant="contained"
              size="small"
              onClick={logout}
              className={classes.logout}
              startIcon={<ExitToAppIcon />}
            >
              Wyloguj
            </Button>
          </Box>
        </Grid>
      </Container>
    </Grid>
  );
};

export default AdminPage;
