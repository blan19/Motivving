import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Responsive from '../../../lib/styles/Responsive';
import { Theme } from '../../../lib/styles/Theme';

export const TopMotiveContainer = styled.div`
  width: 100%;
  height: 50rem;
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
`;

export const SliderContainer = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .prev .next {
    position: absolute;
  }

  .prev {
    left: 10px;
  }

  .next {
  }
`;
