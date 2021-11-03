import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '../../../lib/styles/Theme';

export const AccountTodoContainer = styled.div`
  flex: 0.4;
  height: 30rem;
  border-radius: 1.5rem;

  .todo-title {
    margin-top: 2rem;
    margin-left: 3rem;
    h1 {
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
    }
    span {
      font-weight: 300;
    }
  }

  .todo-rating {
    margin-top: 2rem;
    margin-left: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .todo-input-title {
    margin-top: 2rem;
    margin-left: 3rem;
    h1 {
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
    }
    span {
      font-weight: 300;
    }
  }

  .todo-input {
    margin-top: 2rem;
    margin-left: 3rem;
    margin-right: 4rem;

    display: flex;
    align-items: center;

    input {
      flex: 1;
      border: none;
      background: none;
      outline: none;

      border-bottom: 1.5px solid;
    }

    .todo-tablet-button {
      margin-left: 1rem;
      border: none;
      outline: none;
      background: none;

      padding: 0.7rem 1.5rem;
      border-radius: 1rem;
      cursor: pointer;
    }
  }

  .todo-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 1rem;

    button {
      margin-right: 1rem;
      border: none;
      outline: none;
      background: none;

      padding: 0.7rem 1.5rem;
      border-radius: 1rem;
      cursor: pointer;
    }
  }
`;

export const AccountTodoContainerStyles = (theme: Theme) => css`
  background: ${theme.TopBg};

  .todo-title {
    h1 {
      color: ${theme.input};
    }
    span {
      color: ${theme.input};
    }
  }

  .todo-input-title {
    h1 {
      color: ${theme.input};
    }
    span {
      color: ${theme.input};
    }
  }

  .todo-input {
    input {
      border-color: ${theme.input};
      color: ${theme.input};
    }

    .todo-tablet-button {
      background: ${theme.input};
      color: ${theme.TopBg};
    }
  }

  .todo-button {
    button {
      background: ${theme.input};
      color: ${theme.TopBg};
    }
  }
`;
