/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React from 'react';
import {
  RecomendMotiveContainer,
  RecomendMotiveContainerStyles,
} from './styles';

const RecomendMotive = () => {
  const theme = useTheme();
  return (
    <RecomendMotiveContainer css={RecomendMotiveContainerStyles(theme)}>
      <h1>RecomendMotive</h1>
    </RecomendMotiveContainer>
  );
};

export default RecomendMotive;
