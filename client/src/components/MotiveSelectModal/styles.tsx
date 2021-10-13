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
  }

  .sub-2 {
    font-size: 2rem;
    margin-top: 1rem;
  }

  .checkbox {
    margin: 5rem;
    label {
      padding: 2rem 5rem;
      margin: 0 1rem;
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
`;
