import { ThemeProvider } from '@emotion/react';
import loadable from '@loadable/component';
import React from 'react';
import { Route, Switch } from 'react-router';
import useDarkMode from './hook/useDartkMode';
import GlobalStyles from './lib/styles/Global';
import { ResetStyles } from './lib/styles/reset';
import Main from './pages/Main';
import { default as THEME } from './lib/styles/Theme';

const Landing = loadable(() => import('./pages/Landing'));
const Login = loadable(() => import('./pages/Auth/Login'));
const Signup = loadable(() => import('./pages/Auth/Signup'));
const Category = loadable(() => import('./layout/Category'));
const Account = loadable(() => import('./pages/Accout'));

const App = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <>
      <ThemeProvider theme={THEME[isDarkMode ? 'dark' : 'light']}>
        <GlobalStyles />
        <ResetStyles />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/main" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/category/:category" component={Category} />
          <Route path="/account" component={Account} />
        </Switch>
      </ThemeProvider>
    </>
  );
};

export default App;
