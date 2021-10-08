import React, { FC } from 'react';
import Header from '../../components/Header';
import { HomeContainer } from './styles';

const Home: FC = ({ children }) => {
  return (
    <HomeContainer>
      <Header />
      {children}
    </HomeContainer>
  );
};

export default Home;
