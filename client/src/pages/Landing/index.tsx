import React from 'react';
import Circle from '../../lib/styles/svg/Circle';
import Comments from '../../lib/styles/svg/Comments';
import Logo from '../../lib/styles/svg/Logo';
import MotiveText from '../../lib/styles/svg/MotiveText';
import MyMotive from '../../lib/styles/svg/MyMotive';
import {
  Intro,
  LandingContainer,
  LandingWrapper,
  Motive,
  Start,
  StartButton,
} from './styles';

const Landing = () => {
  return (
    <>
      <LandingContainer>
        <LandingWrapper>
          <Intro>
            <div className="title">
              <p>
                나에게 알맞는 <span>동기부여</span>
              </p>
              <div className="logo">
                <Logo />
              </div>
            </div>
            <div className="comments">
              <Comments />
            </div>
          </Intro>
        </LandingWrapper>
        <div className="circle">
          <Circle />
        </div>
      </LandingContainer>
      <LandingContainer white={true} center={true}>
        <LandingWrapper spacing={true}>
          <Motive>
            <div className="left">
              <div className="title">
                <p>내가 원하는</p>
                <p>
                  <span>Motive</span>를
                </p>
                <p>
                  <span>자유롭게 </span>선택
                </p>
              </div>
              <div className="desc">
                <p>본인이 원하는 Motive 카테고리를 자유롭게 선택하세요.</p>
                <p>선택된 Motive에 알맞는 동기부여 영상을 추천합니다.</p>
              </div>
            </div>
            <div className="rigth-1">
              <MotiveText />
            </div>
          </Motive>
        </LandingWrapper>
      </LandingContainer>
      <LandingContainer center={true}>
        <LandingWrapper spacing={true}>
          <Motive>
            <div className="rigth-2">
              <MyMotive />
            </div>
            <div className="left">
              <div className="title">
                <p>
                  진한 <span>Motive</span>는
                </p>
                <p>항상 남겨두기 !</p>
              </div>
              <div className="desc">
                <p>감명깊게 본 Motive 영상이나 글귀는</p>
                <p>My Motive에 저장해서 항상 남겨둬요</p>
              </div>
            </div>
          </Motive>
        </LandingWrapper>
      </LandingContainer>
      <LandingContainer center={true} white={true}>
        <LandingWrapper spacing={true}>
          <Motive>
            <div className="left">
              <div className="title">
                <p>나의 하루를</p>
                <p>
                  <span>기록</span>해요 !
                </p>
              </div>
              <div className="desc">
                <p>별점과 ‘한마디’를 통해 나의 하루를</p>
                <p>평가해보세요!</p>
              </div>
            </div>
            <div className="rigth-1"></div>
          </Motive>
        </LandingWrapper>
      </LandingContainer>
      <Start>
        <p>
          나에게 알맞는 <span>동기부여</span>
        </p>
        <Logo />
        <div className="button">
          <StartButton>더 많은 동기부여 얻기</StartButton>
        </div>
      </Start>
    </>
  );
};

export default Landing;
