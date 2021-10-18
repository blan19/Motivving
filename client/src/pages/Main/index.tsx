import { Fragment } from 'react';
import MotiveSelectModal from '../../components/MotiveSelectModal';
import Home from '../../layout/Home';
import RecomendMotive from './RecomendMotive';
import TopMotive from './TopMotive';

const Main = () => {
  return (
    <>
      <Home>
        <TopMotive />
        <RecomendMotive type="challenge" />
        <RecomendMotive type="jurney" />
        <RecomendMotive type="design" />
      </Home>
      <MotiveSelectModal />
    </>
  );
};

export default Main;
