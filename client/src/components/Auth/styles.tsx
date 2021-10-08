import styled from '@emotion/styled';
import { styles } from '../../lib/styles/styles';

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

export const Input = styled.input`
  background: none;
  border: none;
  outline: none;

  width: 100%;
  color: ${styles.primary.light[0]};
  border: 1.5px solid ${styles.primary.light[0]};
  font-size: 2rem;

  padding: 1.3rem;
  border-radius: 5px;
  margin: 2rem;

  &::placeholder {
    color: ${styles.primary.light[0]};
    font-size: 2rem;
  }

  &:focus {
    border-color: ${styles.primary.light[1]};
  }
`;

export const AuthButton = styled.button`
  border: none;
  background: none;
  outline: none;

  width: calc(100% + 2.9rem);
  background: ${styles.primary.light[0]};
  color: ${styles.primary.light[2]};
  border-radius: 5px;
  cursor: pointer;
  font-size: 2.75rem;
  padding: 1.5rem;
  margin-top: 2rem;
`;

export const OauthContainer = styled.div`
  width: calc(100% + 2.9rem);
  height: 62px;
  margin-top: 4rem;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
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