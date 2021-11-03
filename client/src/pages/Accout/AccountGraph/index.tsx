/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React from 'react';
import { AccountGraphContainer, AccountGraphContainerStyles } from './styles';

const AccountGraph = () => {
  const theme = useTheme();
  return (
    <AccountGraphContainer css={AccountGraphContainerStyles(theme)}>
      <div className="graph-title">
        <h1>My Graph</h1>
      </div>
      <div className="graph-contents"></div>
    </AccountGraphContainer>
  );
};

export default AccountGraph;
