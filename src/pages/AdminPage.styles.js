const styles = (theme, formStatus) => {
  return {
    header: {
      align: 'center',
      fontSize: '40px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '20px',
      },
      'white-space': 'nowrap',
      color: '#3b8dff',
    },
    box: {
      marginLeft: 20,
      marginRight: 20,
      marginTop: 20,
      marginBottom: 20,
    },
    root: {
      flexGrow: 1,
      background: '#e6f2ff',
      maxWidth: '500px',
      borderRadius: '10px',
      display: 'inline-block',
    },
    root2: {
      flexGrow: 1,
      background: '#abe4ff',
      maxWidth: '500px',
      borderRadius: '10px',
    },
    isActive: {
      backgroundColor: (formStatus) => {
        if (formStatus) {
          return 'red';
        } else {
          return 'green';
        }
      },
      '&:hover': {
        backgroundColor: (formStatus) => {
          if (formStatus) {
            return 'green';
          } else {
            return 'red';
          }
        },
      },
    },
    email: {
      backgroundColor: '#ff99cc',
    },
    logout: {
      backgroundColor: 'black',
      color: 'white',
    },
  };
};

export default styles;
