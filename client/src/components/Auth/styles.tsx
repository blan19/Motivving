import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { styles } from '../../lib/styles/styles';
import { Theme } from '../../lib/styles/Theme';

export const Form = styled.form`
  margin-top: 2rem;
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 300px;

  .box {
    width: calc(100% + 2.9rem);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 2rem;

    p {
      color: ${styles.primary.light[0]};
      font-size: 1.75rem;

      a {
        color: ${styles.primary.light[1]};
      }
    }
  }
`;

export const FormStyles = (theme: Theme) => css`
  .box {
    p {
      color: ${theme.font};
      a {
        color: ${theme.sub};
      }
    }
  }
`;

export const Input = styled.input`
  background: none;
  border: none;
  outline: none;

  width: 100%;
  font-size: 2rem;

  padding: 1.3rem;
  border-radius: 5px;
  margin: 2rem;

  &::placeholder {
    font-size: 2rem;
  }
`;

export const InputStyle = (theme: Theme) => css`
  color: ${theme.font};
  border: 1.5px solid ${theme.input};
  &::placeholder {
    color: ${theme.input};
  }

  &:focus {
    border-color: ${styles.primary.light[1]};

    &::placeholder {
      color: ${styles.primary.light[1]};
    }
  }
`;

export const AuthButton = styled.button`
  border: none;
  background: none;
  outline: none;

  width: calc(100% + 2.9rem);
  border-radius: 5px;
  cursor: pointer;
  font-size: 2.75rem;
  padding: 1.5rem;
  margin-top: 2rem;
`;

export const AuthButtonStyles = (theme: Theme) => css`
  background: ${theme.primary};
  color: ${theme.buttonFont};
`;

export const OauthContainer = styled.div<{ type?: string }>`
  width: calc(100% + 2.9rem);
  height: 7rem;
  margin-top: 4rem;
  border-radius: 5px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    color: black;
  }
  ${(props) =>
    props.type === 'kakao' &&
    css`
      background: #fee500;
      span {
        font-size: 2.75rem;
        color: #000000 85%;
        padding-left: 1rem;
      }
    `}

  ${(props) =>
    props.type === 'naver' &&
    css`
      background: #03c75a;
      span {
        font-size: 2.75rem;
        color: white;
        padding-left: 1rem;
      }
    `}

  svg {
    font-size: 3rem;
    color: ${(props) => props.type === 'naver' && 'white'};
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const AuthError = styled.div`
  width: 100%;
  padding: 1.3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    /* color: ${styles.primary.light[1]}; */
    color: #fa5252;
    font-size: 2rem;
  }
`;
