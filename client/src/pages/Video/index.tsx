import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Home from '../../layout/Home';
import {
  MyMotiveVideo,
  VideoContainer,
  VideoResponsive,
  ViewContainer,
} from './styles';

const Video = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1280px)' });
  return (
    <Home>
      <VideoResponsive>
        <VideoContainer>
          <ViewContainer>
            <div className="video">
              <video style={{ width: '100%' }} src="" autoPlay controls></video>
            </div>
          </ViewContainer>
          {isDesktop && (
            <MyMotiveVideo>
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
