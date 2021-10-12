import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Theme } from '../../lib/styles/Theme';

export const Test = styled.p`
  font-size: 5rem;
  margin-top: 1rem;
`;

export const TestStyles = (theme: Theme) => css`
  color: ${theme.font};
  background: ${theme.sub};
`;
