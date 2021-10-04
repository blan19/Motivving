import styled from '@emotion/styled';
import { styles } from '../../lib/styles/styles';
import { css } from '@emotion/react';

export const LandingContainer = styled.div<{
  center?: boolean;
  white?: boolean;
}>`
  width: 100%;
  height: 880px;

  position: relative;
  ${(props) =>
    props.center &&
    css`
      display: flex;
      align-items: center;
    `}
  ${(props) =>
    props.white &&
    css`
      background: white;
    `}
  .circle {
    position: absolute;
    width: 350px;
    left: -80px;
    top: 200px;
    z-index: 2;
    svg {
      width: 100%;
    }
    @media screen and (max-width: 770px) {
      display: none;
    }
  }
`;

export const LandingWrapper = styled.div<{ spacing?: boolean }>`
  width: 1280px;
  margin: 0 auto;

  ${(props) =>
    props.spacing
      ? css`
          @media screen and (max-width: 1280px) {
            width: 770px;
          }

          @media screen and (max-width: 770px) {
            width: 600px;
          }
        `
      : css`
          @media screen and (max-width: 1280px) {
            width: 770px;
          }

          @media screen and (max-width: 770px) {
            width: 400px;
          }
        `}
`;

export const Intro = styled.div`
  position: relative;
  width: 100%;
  padding: 100px 0;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 770px) {
    flex-direction: column;
    align-items: center;
  }

  .title {
    p {
      font-size: 26px;
      color: ${styles.primary.light[0]};

      @media screen and (max-width: 1280px) {
        font-size: 20px;
      }
      @media screen and (max-width: 770px) {
        font-size: 16px;
      }
      span {
        color: ${styles.primary.light[1]};
      }
    }

    .logo {
      width: 400px;
      @media screen and (max-width: 1280px) {
        width: 270px;
        svg {
          height: 98.64px;
        }
      }
      @media screen and (max-width: 770px) {
        width: 400px;
        svg {
          height: 128.64px;
        }
      }
      svg {
        width: 100%;
      }
    }
  }

  .comments {
    width: 800px;
    svg {
      width: 100%;
      height: 700px;
    }
    @media screen and (max-width: 1280px) {
      width: 500px;
      svg {
        height: 477px;
      }
    }
    @media screen and (max-width: 770px) {
      width: 400px;
      height: 477px;
    }
  }
`;

export const Motive = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .left {
    color: ${styles.primary.light[0]};
    .title {
      p {
        font-size: 50px;
        @media screen and (max-width: 770px) {
          font-size: 25px;
        }
        span {
          color: ${styles.primary.light[1]};
        }
      }
    }
    .desc {
      padding-top: 0.5rem;
      font-weight: 300;
      @media screen and (max-width: 770px) {
        font-size: 12px;
      }

      @media screen and (max-width: 500px) {
        font-size: 8px;
      }
    }
  }

  .rigth-1 {
    @media screen and (max-width: 770px) {
      width: 130px;
    }
    svg {
      width: 100%;
    }
  }

  .rigth-2 {
    @media screen and (max-width: 770px) {
      width: 200px;
    }
    svg {
      width: 100%;
    }
  }
`;

export const Start = styled.div`
  width: 100%;
  height: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: ${styles.primary.light[0]};
    font-size: 26px;
    padding-bottom: 0.7rem;
    span {
      color: ${styles.primary.light[1]};
    }
  }
`;

export const StartButton = styled.button`
  outline: none;
  background: none;
  border: none;

  background: ${styles.primary.light[0]};
  color: white;
  margin-top: 4rem;

  font-size: 26px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 5rem;
  padding-right: 5rem;
  cursor: pointer;

  border-radius: 20px;
`;
