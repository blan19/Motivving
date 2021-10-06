import styled from '@emotion/styled';
import { styles } from '../../lib/styles/styles';
import { css } from '@emotion/react';
import Responsive from '../../lib/styles/Responsive';

export const Container = styled.div<{ white?: boolean; md?: boolean }>`
  width: 100%;
  position: relative;
  ${(props) =>
    props.white
      ? css`
          background: white;
        `
      : css``}
  ${(props) =>
    props.md
      ? css`
          height: 700px;
        `
      : css`
          height: 880px;
        `}
  
  .circle {
    position: absolute;
    width: 500px;
    top: 200px;
    left: -145px;
    @media screen and (max-width: 1280px) {
      width: 400px;
      left: -100px;
    }

    @media screen and (max-width: 1024px) {
      width: 300px;
      left: -80px;
    }

    @media screen and (max-width: 768px) {
      width: 200px;
      left: -60px;
    }

    @media screen and (max-width: 480px) {
      width: 100px;
      left: -30px;
    }
    svg {
      width: 100%;
    }
  }
`;

export const StyledResponsive = styled(Responsive)`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 100%;
  }
`;

export const Start = styled.div`
  width: 100%;
  height: 600px;
`;

export const StartResponsive = styled(Responsive)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StartButton = styled.button`
  background: none;
  border: none;
  outline: none;

  background: ${styles.primary.light[0]};
  color: ${styles.primary.light[2]};
  border-radius: 12px;
  cursor: pointer;
  font-size: 2.75rem;
  padding: 1.5rem 8rem;
  margin-top: 7rem;
`;
