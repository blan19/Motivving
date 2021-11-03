/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React from 'react';
import { AccountMyMotiveContainer, AccountMyMotiveStyles } from './styles';

const AccountMyMotive = () => {
  const theme = useTheme();
  return (
    <AccountMyMotiveContainer css={AccountMyMotiveStyles(theme)}>
      <div className="mymotive-title">
        <h1>My Motive</h1>
      </div>
    </AccountMyMotiveContainer>
  );
};

export default AccountMyMotive;
