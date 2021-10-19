import React, { useCallback, VFC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import useDarkMode from '../../hook/useDartkMode';
import Circle from '../../lib/styles/svg/Circle';
import Intro from '../../lib/styles/svg/Intro';
import MyMotive from '../../lib/styles/svg/MyMotive';
import Select from '../../lib/styles/svg/Select';
import TextLogo from '../../lib/styles/svg/TextLogo';
import Today from '../../lib/styles/svg/Today';
import {
  Container,
  Start,
  StartButton,
  StartResponsive,
  StyledResponsive,
} from './styles';

const Landing: VFC<RouteComponentProps> = ({ history }) => {
  const onClick = useCallback(() => {
    history.push('/login');
  }, [history]);
  const { isDarkMode } = useDarkMode();
  return (
    <>
      <Container>
        <StyledResponsive>
          <Intro />
        </StyledResponsive>
        <div className="circle">
          <Circle />
        </div>
      </Container>
      <Container white md isDarkMode={isDarkMode}>
        <StyledResponsive>
          <Select />
        </StyledResponsive>
      </Container>
      <Container md>
        <StyledResponsive>
          <MyMotive />
        </StyledResponsive>
      </Container>
      <Container white isDarkMode={isDarkMode}>
        <StyledResponsive>
          <Today />
          <div className="space"></div>
        </StyledResponsive>
      </Container>
      <Start>
        <StartResponsive>
          <TextLogo />
          <div className="button">
            <StartButton onClick={onClick}>더 많은 동기부여 얻기</StartButton>
          </div>
        </StartResponsive>
      </Start>
    </>
  );
};

export default withRouter(Landing);
