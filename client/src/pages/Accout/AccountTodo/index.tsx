/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Star from './Star';
import { AccountTodoContainer, AccountTodoContainerStyles } from './styles';

const AccountTodo = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  return (
    <AccountTodoContainer css={AccountTodoContainerStyles(theme)}>
      <div className="todo-title">
        <h1>오늘 나의 하루는?</h1>
        <span>나의 하루를 별점으로 평가하세요</span>
      </div>
      <div className="todo-rating">
        <Star />
      </div>
      <div className="todo-input-title">
        <h1>오늘의 한마디</h1>
        <span>나의 하루를 한마디로 표현하세요</span>
      </div>
      <div className="todo-input">
        <input />
        {isTablet && <button className="todo-tablet-button">확인</button>}
      </div>
      {isTablet ? null : (
        <div className="todo-button">
          <button>확인</button>
        </div>
      )}
    </AccountTodoContainer>
  );
};

export default AccountTodo;
