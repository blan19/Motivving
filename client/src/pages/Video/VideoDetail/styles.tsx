import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '../../../lib/styles/Theme';

export const VideoDetailContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;
    line-height: 0;
    h1 {
      font-size: 2.75rem;
      font-weight: 400;
    }
    .like {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      & > h1 {
        padding-right: 0.65rem;
      }
      svg {
        cursor: pointer;
        font-size: 3rem;
      }
    }
  }

  .info {
  }

  .etc {
    display: flex;
    font-size: 1.5rem;
    .view {
      padding-right: 4rem;
    }
  }

  .divider {
    width: 100%;
    height: 1px;
    margin: 3rem 0;
  }
`;

export const VideoDetailContainerStyles = (theme: Theme) => css`
  .title {
    h1 {
      color: ${theme.input};
    }
    .like {
      & > h1 {
      }
      svg {
        color: ${theme.sub};
      }
    }
  }

  .etc {
    color: ${theme.input};
  }

  .divider {
    background: ${theme.input};
  }
`;
