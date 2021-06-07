import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { blue, cyan } from '@material-ui/core/colors';
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: cyan,
  },

  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/Login">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
