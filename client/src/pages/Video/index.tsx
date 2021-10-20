/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Home from '../../layout/Home';
import MyMotiveVideo from './MyMotiveVideo';
import RelativeMotive from './RelativeMotive';
import {
  VideoContainer,
  VideoResponsive,
  ViewContainer,
  ViewContainerStyles,
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
          <ViewContainer isDesktop={isDesktop} css={ViewContainerStyles(theme)}>
            <div className="video">
              <video style={{ width: '100%' }} src="" autoPlay controls></video>
            </div>
            <VideoDetail />
            <RelativeMotive theme={theme} />
            {/* 나중에 divider 컴포넌트화 */}
            {isTabletOrMobile && <div className="divider"></div>}
            {isTabletOrMobile && (
              <MyMotiveVideo
                theme={theme}
                isTabletOrMobile={isTabletOrMobile}
              />
            )}
          </ViewContainer>
          {isDesktop && <MyMotiveVideo theme={theme} />}
        </VideoContainer>
      </VideoResponsive>
    </Home>
  );
};

export default Video;
