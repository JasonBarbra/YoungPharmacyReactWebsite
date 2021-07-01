import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { blue, cyan } from '@material-ui/core/colors';
import { AuthProvider } from './contexts/AuthContext';
import { FormProvider } from './contexts/FormContext';
import AdminPage from './pages/AdminPage';
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: cyan,
  },

  typography: {
    fontFamily: 'Roboto',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 330,
      md: 400,
      lg: 450,
      xl: 700,
    },
  },
});
function App() {
  return (
    <FormProvider>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route exact path="/">
                <MainPage />
              </Route>
              <Route path="/Login">
                <LoginPage />
              </Route>
              <Route path="/Admin">
                <AdminPage />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </AuthProvider>
    </FormProvider>
  );
}

export default App;
