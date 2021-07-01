const styles = (theme) => {
  return {
    picture: {
      marginTop: '50px',
      cursor: 'pointer',
      display: 'block',
    },
    picture2: {
      marginTop: '50px',
      width: '50%',
    },
    header: {
      align: 'center',
      fontSize: '40px',
      'font-family': 'Open Sans Condensed',
      'font-weight': 'bold',
      [theme.breakpoints.down('sm')]: {
        fontSize: '30px',
      },
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
      [theme.breakpoints.down('sm')]: {
        fontSize: '9px',
        'white-space': 'nowrap',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '9px',
        'white-space': 'nowrap',
      },
      [theme.breakpoints.down('lg')]: {
        fontSize: '9px',
        'white-space': 'nowrap',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '12px',
        'white-space': 'nowrap',
      },
    },
    button: {
      marginTop: '20px',
      marginBottom: '20px',
    },
    list: {
      backgroundColor: '#e6f2ff',
      fontFamily: 'Roboto',
      cursor: 'pointer',
    },
  };
};

export default styles;
