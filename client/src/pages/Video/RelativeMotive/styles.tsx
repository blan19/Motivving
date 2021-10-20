import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '../../../lib/styles/Theme';

export const RelativeMotiveContainer = styled.div`
  .title {
    h1 {
      font-size: 3rem;
      font-weight: 400;
      margin-bottom: 3rem;
    }
  }
  .video-title {
    width: 100%;
    margin: 2rem 0;
    font-size: 1.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .like {
      cursor: pointer;
      svg {
        font-size: 2rem;
        display: flex;
        align-items: center;
      }
    }
  }

  .video-desc {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.75rem;
    font-weight: lighter;
  }

  .myMotive {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 480px) {
      grid-template-columns: repeat(1, 1fr);
    }
    gap: 5rem;
    .myMotive-video {
      video {
        width: 100%;
      }
    }
  }
`;

export const RelativeMotiveStyles = (theme: Theme) => css`
  .title {
    h1 {
      color: ${theme.sub};
    }
  }

  .myMotive {
    .myMotive-video {
      .video-title {
        span {
          color: ${theme.input};
        }
        .like {
          svg {
            color: ${theme.sub};
          }
        }
      }

      .video-desc {
        color: ${theme.input};
      }
    }
  }
`;
