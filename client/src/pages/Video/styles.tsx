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

  .divider {
    width: 100%;
    height: 1px;
    margin: 3rem 0;
  }
`;

export const ViewContainerStyles = (theme: Theme) => css`
  .divider {
    background: ${theme.input};
  }
`;
