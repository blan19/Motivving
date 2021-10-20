import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '../../../lib/styles/Theme';

export const MyMotiveVideoContainer = styled.div<{
  isTabletOrMobile?: boolean;
}>`
  .title {
    h1 {
      font-size: 3rem;
      font-weight: 400;
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
  ${(props) =>
    props.isTabletOrMobile
      ? css`
          width: 100%;
          .title {
            h1 {
              margin-bottom: 3rem;
            }
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
        `
      : css`
          width: 300px;
          height: 100%;
          padding-right: 3rem;

          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;

          .myMotive {
            flex: 1;
            width: 100%;
            .myMotive-video {
              width: 100%;
              margin-top: 3rem;
              video {
                width: 100%;
              }
            }
          }
        `}
`;

export const MyMotiveStyles = (theme: Theme) => css`
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
