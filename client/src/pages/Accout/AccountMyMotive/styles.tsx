import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '../../../lib/styles/Theme';

export const AccountMyMotiveContainer = styled.div`
  height: 40rem;
  margin-top: 5rem;
  border-radius: 1.5rem;
  margin-bottom: 5rem;

  .mymotive-title {
    display: flex;
    h1 {
      margin-top: 2rem;
      font-size: 1.8rem;
    }
  }
`;

export const AccountMyMotiveStyles = (theme: Theme) => css`
  background: ${theme.TopBg};
  .mymotive-title {
    h1 {
      color: ${theme.input};
    }
  }
`;
