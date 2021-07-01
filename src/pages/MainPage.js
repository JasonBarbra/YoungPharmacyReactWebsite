import React, { useState } from 'react';
import { useForm } from '../contexts/FormContext';
import EndPart from '../components/endPart';
import {
  Typography,
  makeStyles,
  Container,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Grid,
} from '@material-ui/core';
import Form from '../components/form';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { useHistory } from 'react-router';
import styles from './MainPage.styles';

const useStyles = makeStyles(styles);

const MainPage = (props) => {
  const [dropDrawer, SetDropDrawer] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const { header, formStatus, formEnded, formNotEnded } = useForm();
  const toggleDrawer = (open) => {
    SetDropDrawer(open);
  };

  return (
    <Grid container>
      <Container align="center">
        <SwipeableDrawer
          anchor="top"
          open={dropDrawer}
          onClose={() => toggleDrawer(false)}
          onOpen={() => toggleDrawer(true)}
        >
          <List
            className={classes.list}
            onClick={() => history.push('./login')}
          >
            <ListItem>
              <ListItemIcon>
                <PersonPinIcon />
              </ListItemIcon>
              <ListItemText primary={'Zaloguj'} />
            </ListItem>
          </List>
        </SwipeableDrawer>
        <img
          className={classes.picture}
          src="./logo1.png"
          alt="Młoda farmacja"
          onClick={() => toggleDrawer(true)}
        />

        <Typography
          gutterBottom
          color="textSecondary"
          className={classes.header}
        >
          {header}
        </Typography>

        {formNotEnded && (
          <Form classes={classes} status={formStatus} filled={formEnded} />
        )}
        {!formNotEnded && <EndPart />}
      </Container>
    </Grid>
  );
};

export default MainPage;
