import React from 'react';
import { Global, css } from '@emotion/react';
import { default as THEME, Theme } from './Theme';
import useDarkMode from '../../hook/useDartkMode';

const styles = (theme: Theme) => css`
  html,
  body {
    background: ${theme.background};

    transition: background 0.5s ease;
  }
`;

const GlobalStyles = () => {
  const { isDarkMode } = useDarkMode();
  return <Global styles={styles(THEME[isDarkMode ? 'dark' : 'light'])} />;
};

export default GlobalStyles;
