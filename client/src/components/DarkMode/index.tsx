/** @jsxImportSource @emotion/react */

import { useTheme } from '@emotion/react';
import React from 'react';
import useDarkMode from '../../hook/useDartkMode';
import { ToggleContainer } from './styles';

const DarkMode = () => {
  const theme = useTheme();
  const { isDarkMode, toggle } = useDarkMode();
  return (
    <div onClick={toggle} css={ToggleContainer(theme)}>
      {isDarkMode ? '🌞' : '🌜'}
    </div>
  );
};

export default DarkMode;
