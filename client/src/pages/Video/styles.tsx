import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '../../lib/styles/Theme';

export const VideoResponsive = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  @media screen and (max-width: 1280px) {
    width: 1024px;
  }

  @media screen and (max-width: 1024px) {
    width: 768px;
  }

  @media screen and (max-width: 768px) {
    width: 480px;
  }

  @media screen and (max-width: 480px) {
    width: 400px;
  }
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 5rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const ViewContainer = styled.div<{ isDesktop?: boolean }>`
  flex: 1;
  margin: 0 ${(props) => props.isDesktop && '3rem'};
`;

export const MyMotiveVideo = styled.div`
  width: 300px;
  height: 100%;
  padding-right: 3rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  .title {
    h1 {
      font-size: 3rem;
      font-weight: 400;
    }
  }

  .myMotive {
    flex: 1;
    width: 100%;
    .myMotive-video {
      width: 100%;
      height: 20rem;
      margin-top: 3rem;
      background: #939393;
    }
  }
`;

export const MyMotiveStyles = (theme: Theme) => css`
  .title {
    h1 {
      color: ${theme.sub};
    }
  }

  .myMotive {
    .myMotive-video {
    }
  }
`;
