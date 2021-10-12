import React, { FC } from 'react';
import DarkMode from '../../components/DarkMode';
import Header from '../../components/Header';
import { HomeContainer } from './styles';

const Home: FC = ({ children }) => {
  return (
    <>
      <HomeContainer>
        <Header />
        {children}
      </HomeContainer>
      <DarkMode />
    </>
  );
};

export default Home;
