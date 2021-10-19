import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const VideoResponsive = styled.div`
  width: 100%;
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ViewContainer = styled.div`
  flex: 1;
  margin: 0 5rem;
`;

export const MyMotiveVideo = styled.div`
  width: 300px;
  height: 100%;
`;
