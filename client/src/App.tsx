import loadable from '@loadable/component';
import React from 'react';
import { Route, Switch } from 'react-router';
import Main from './pages/Main';

const Landing = loadable(() => import('./pages/Landing'));
const Login = loadable(() => import('./pages/Auth/Login'));
const Signup = loadable(() => import('./pages/Auth/Signup'));
const Category = loadable(() => import('./layout/Category'));
const Account = loadable(() => import('./pages/Accout'));

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/main" component={Main} />
        <Route path="/landing" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/category/:category" component={Category} />
        <Route path="/account" component={Account} />
      </Switch>
    </>
  );
};

export default App;
