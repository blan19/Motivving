/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React from 'react';
import { TopMotiveContainer, TopMotiveContainerStyles } from './styles';

const TopMotive = () => {
  const theme = useTheme();
  return (
    <TopMotiveContainer css={TopMotiveContainerStyles(theme)}>
      <div className="title">
        <h1>Motivving Top 10</h1>
      </div>
    </TopMotiveContainer>
  );
};

export default TopMotive;
