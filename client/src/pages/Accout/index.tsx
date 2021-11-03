/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React, { VFC } from 'react';
import { useQuery } from 'react-query';
import { RouteComponentProps } from 'react-router';
import { IUser } from '../../dto/IUser';
import Home from '../../layout/Home';
import { fetcher } from '../../lib/api/fetch';
import AccountGraph from './AccountGraph';
import AccountMyMotive from './AccountMyMotive';
import AccountTodo from './AccountTodo';
import {
  AccountContainer,
  AccountResponsive,
  AccountTitle,
  AccountTitleStyles,
} from './styles';

const Account: VFC<RouteComponentProps> = () => {
  const { data: userData } = useQuery<IUser>('users', fetcher);
  const theme = useTheme();
  return (
    <Home>
      <AccountContainer>
        <AccountResponsive>
          <AccountTitle css={AccountTitleStyles(theme)}>
            <h1>
              <span>{`'${userData?.nickname}'`}</span>님 오늘도 수고하셨어요!
            </h1>
          </AccountTitle>
          <div className="account-diary">
            <AccountTodo />
            <AccountGraph />
          </div>
          <AccountMyMotive />
        </AccountResponsive>
      </AccountContainer>
    </Home>
  );
};

export default Account;
