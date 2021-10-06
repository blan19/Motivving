import loadable from '@loadable/component';
import React from 'react';
import { Route, Switch } from 'react-router';
import Main from './pages/Main';

const Landing = loadable(() => import('./pages/Landing'));

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/landing" component={Landing} />
        <Route path="/category" />
        <Route path="/account" />
      </Switch>
    </>
  );
};

export default App;
