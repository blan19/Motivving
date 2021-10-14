import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Theme } from '../../lib/styles/Theme';

export const MotiveSelectModalForm = styled.form<{ isDarkMode?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 3rem;
    font-weight: 600;
    margin: 1rem;
  }

  .sub-1 {
    font-size: 2rem;
    margin-top: 1rem;
  }

  .sub-2 {
    font-size: 2rem;
    margin-top: 1rem;
  }

  .checkbox {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 90%;
    margin-top: 5rem;
    margin-bottom: 4rem;
    gap: 2.5rem;
    label {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem 5rem;
      font-size: 2rem;
      border-radius: 5px;
      transition: all 0.3s;
    }

    input[type='checkbox'] {
      display: none;
    }

    input[type='checkbox'] + label {
      cursor: pointer;
    }
  }

  .error {
    p {
      margin-bottom: 3rem;
      font-size: 2.5rem;
      font-weight: bold;
    }
  }

  .button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 2rem;
    span {
      cursor: pointer;
      font-weight: bold;
      font-size: 2rem;
      position: relative;
    }
    span:after {
      content: '';
      display: block;
      width: 100%;
      height: 7px;
      position: absolute;
      bottom: -4px;
      left: 1px;
      background: rgba(244, 5, 166, 0.44);
    }
  }

  @media screen and (max-width: 1280px) {
    width: 600px;
  }

  @media screen and (max-width: 1024px) {
    width: 500px;
  }

  @media screen and (max-width: 768px) {
    width: 400px;
  }

  @media screen and (max-width: 480px) {
    width: 300px;
  }
`;

export const StylesMotiveSelectModalForm = (theme: Theme) => css`
  h1 {
    color: ${theme.font};
  }

  .sub-1 {
    color: ${theme.font};
  }

  .sub-2 {
    color: ${theme.font};
  }

  .checkbox {
    label {
      background: ${theme.modal};
      color: ${theme.modalFont};
    }

    input[type='checkbox'] {
    }

    input[type='checkbox'] + label {
    }

    input[type='checkbox']:checked + label {
      background: ${theme.modalChecked};
      color: ${theme.buttonFont};
    }
  }

  .error {
    p {
      color: ${theme.sub};
    }
  }

  .button {
    span {
      color: ${theme.font};
    }
  }
`;
