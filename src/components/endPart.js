import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import picture from '../pictures/picture.png';
import styles from './endPart.styles';

const useStyles = makeStyles(styles);

const EndPart = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={picture} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Gratulacje
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            właśnie zapisałeś się na webinar, sprawdź swój email
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EndPart;
