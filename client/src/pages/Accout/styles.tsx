import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Responsive from '../../lib/styles/Responsive';
import { Theme } from '../../lib/styles/Theme';

export const AccountContainer = styled.div``;

export const AccountResponsive = styled(Responsive)`
  .account-diary {
    display: flex;
    align-items: center;
  }
`;

export const AccountTitle = styled.div`
  margin: 5rem 0;
  font-size: 1.5rem;
`;

export const AccountTitleStyles = (theme: Theme) => css`
  h1 {
    color: ${theme.input};
  }
  h1 > span {
    color: ${theme.sub};
  }
`;
