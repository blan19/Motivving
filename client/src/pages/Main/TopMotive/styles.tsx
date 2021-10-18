import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Responsive from '../../../lib/styles/Responsive';
import { Theme } from '../../../lib/styles/Theme';

export const TopMotiveContainer = styled.div`
  width: 100%;
  height: 53.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10rem;
    h1 {
      font-size: 3rem;
    }
  }
`;

export const TopMotiveContainerStyles = (theme: Theme) => css`
  background: ${theme.TopBg};
  transition: all 0.3s ease;
  .title {
    h1 {
      color: ${theme.sub};
    }
  }
`;

export const StyledResponsive = styled(Responsive)`
  flex: 1;
  position: relative;
  margin-bottom: 3.5rem;
  .prev {
    position: absolute;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
    left: 0px;
    z-index: 900;
    svg {
      font-size: 4rem;
    }
  }
  .next {
    position: absolute;
    cursor: pointer;
    right: 0px;
    top: 50%;
    z-index: 900;
    transform: translateY(-50%);
    svg {
      font-size: 4rem;
    }
  }
`;

export const StyledResponsiveStyles = (theme: Theme) => css`
  svg {
    color: ${theme.input};
  }
`;

export const SliderContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5rem;
`;

export const SliderWrapper = styled.div``;

export const SliderContents = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .thumb {
    width: 100%;
    height: 40rem;
    background: #939393;
  }
`;
