import axios from 'axios';
import { Fragment, useCallback } from 'react';
import MotiveSelectModal from '../../components/MotiveSelectModal';
import Home from '../../layout/Home';
import RecomendMotive from './RecomendMotive';
import TopMotive from './TopMotive';

const Main = () => {
  const onLogout = useCallback(async () => {
    await axios.post('http:');
  }, []);
  return (
    <>
      <Home>
        <button>로그아웃</button>
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
