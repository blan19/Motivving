import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../Home';
import { CategoryContainer } from './styles';

const Category = () => {
  return (
    <Home>
      <CategoryContainer>
        <Switch>
          <Route path="/category/all" />
          <Route path="/category/brave" />
          <Route path="/category/transfer" />
          <Route path="/category/object" />
          <Route path="/category/worry" />
          <Route path="/category/success" />
          <Route path="/category/design" />
          <Route path="/category/development" />
          <Route path="/category/process" />
          <Route path="/category/jurney" />
        </Switch>
      </CategoryContainer>
    </Home>
  );
};

export default Category;
