import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '../../../lib/styles/Theme';

export const AccountGraphContainer = styled.div`
  /* width: 30rem; */
  flex: 0.6;
  height: 30rem;
  margin-left: 3.5rem;
  border-radius: 1.5rem;

  display: flex;

  .graph-title {
    padding-top: 2rem;
    padding-left: 3rem;
    padding-right: 3rem;
    h1 {
      color: white;
      font-size: 1.8rem;
    }
  }

  .graph-contents {
    flex: 1;
  }
`;

export const AccountGraphContainerStyles = (theme: Theme) => css`
  background: ${theme.primary};

  .graph-title {
    h1 {
    }
  }
`;
