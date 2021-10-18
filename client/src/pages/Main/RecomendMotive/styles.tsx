import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Responsive from '../../../lib/styles/Responsive';
import { Theme } from '../../../lib/styles/Theme';

export const RecomendMotiveContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const RecomendMotiveContainerStyles = (theme: Theme) => css`
  .prev {
    svg {
      color: ${theme.input};
    }
  }
  .next {
    svg {
      color: ${theme.input};
    }
  }
`;

export const RecomendResponsive = styled(Responsive)`
  position: relative;
  .title {
    margin-top: 5rem;
    margin-bottom: 5rem;
    font-size: 1.75rem;
  }

  .prev {
    cursor: pointer;
    position: absolute;
    left: 0;
    z-index: 900;
    top: 50%;
    transform: translateY(-50%);
    svg {
      font-size: 2.5rem;
    }
  }
  .next {
    cursor: pointer;
    position: absolute;
    right: 5px;
    z-index: 900;
    top: 50%;
    transform: translateY(-50%);
    svg {
      font-size: 2.5rem;
    }
  }
`;

export const RecomendResponsiveStyles = (theme: Theme) => css`
  .prev {
    svg {
      color: ${theme.input};
    }
  }
  .next {
    svg {
      color: ${theme.input};
    }
  }
`;

export const titleStyles = (theme: Theme) => css`
  color: ${theme.input};
  span {
    color: ${theme.sub};
  }
`;

export const RecomendItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .thumb {
    width: 100%;
    height: 25rem;
    background: #939393;
  }

  .video-title {
    margin: 2rem 0;
    font-weight: bold;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: start;
  }
`;

export const RecomendItemContainerStyles = (theme: Theme) => css`
  .video-title {
    span {
      color: ${theme.input};
    }
  }
`;
