import { css } from '@emotion/react';
import { Theme } from '../../lib/styles/Theme';

export const ToggleContainer = (theme: Theme) => css`
  position: fixed;
  width: 65px;
  height: 65px;
  background: ${theme.toggle};

  right: 25px;
  bottom: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  font-size: 5rem;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  z-index: 999;
`;
