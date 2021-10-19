import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../Home';
import { CategoryContainer } from './styles';

const Category = () => {
  return (
    <Home>
      <CategoryContainer>
        <Switch>
          <Route path="/category/:category" />
        </Switch>
      </CategoryContainer>
    </Home>
  );
};

export default Category;
