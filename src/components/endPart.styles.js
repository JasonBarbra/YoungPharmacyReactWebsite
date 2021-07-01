const styles = (theme) => {
  return {
    root: {
      [theme.breakpoints.down('md')]: {
        maxWidth: 345,
      },
      [theme.breakpoints.up('xl')]: {
        maxWidth: 800,
      },
    },
    media: {
      [theme.breakpoints.up('xs')]: {
        height: 140,
      },
      [theme.breakpoints.up('sm')]: {
        height: 180,
      },
      [theme.breakpoints.up('lg')]: {
        height: 200,
      },
      [theme.breakpoints.up('xl')]: {
        height: 200,
      },
    },
  };
};

export default styles;
