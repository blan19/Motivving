import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '../../../lib/styles/Theme';

export const TopMotiveContainer = styled.div`
  width: 100%;
  height: 50rem;

  .title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 4rem;
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
