/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Home from '../../layout/Home';
import {
  MyMotiveStyles,
  MyMotiveVideo,
  VideoContainer,
  VideoResponsive,
  ViewContainer,
} from './styles';
import VideoDetail from './VideoDetail';

const Video = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1280px)' });
  const theme = useTheme();
  return (
    <Home>
      <VideoResponsive>
        <VideoContainer>
          <ViewContainer isDesktop={isDesktop}>
            <div className="video">
              <video style={{ width: '100%' }} src="" autoPlay controls></video>
            </div>
            <VideoDetail />
          </ViewContainer>
          {isDesktop && (
            <MyMotiveVideo css={MyMotiveStyles(theme)}>
              <div className="title">
                <h1>My Motive</h1>
              </div>
              <div className="myMotive">
                <div className="myMotive-video"></div>
                <div className="myMotive-video"></div>
                <div className="myMotive-video"></div>
                <div className="myMotive-video"></div>
              </div>
            </MyMotiveVideo>
          )}
        </VideoContainer>
      </VideoResponsive>
    </Home>
  );
};

export default Video;
