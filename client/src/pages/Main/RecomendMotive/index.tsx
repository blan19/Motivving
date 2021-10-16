/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React from 'react';
import { StyledResponsive } from '../TopMotive/styles';
import {
  RecomendMotiveContainer,
  RecomendMotiveContainerStyles,
} from './styles';

const RecomendMotive = () => {
  const theme = useTheme();
  return (
    <RecomendMotiveContainer css={RecomendMotiveContainerStyles(theme)}>
      <StyledResponsive></StyledResponsive>
    </RecomendMotiveContainer>
  );
};

export default RecomendMotive;
