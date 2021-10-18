/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React, { FC } from 'react';
import { RecomendItemContainer, RecomendItemContainerStyles } from './styles';

const RecomendMotiveContent: FC = () => {
  const theme = useTheme();
  return (
    <RecomendItemContainer css={RecomendItemContainerStyles(theme)}>
      <div className="thumb"></div>
      <div className="video-title">
        <div>
          <span>도전을 시작하는 당신에게</span>
        </div>
      </div>
    </RecomendItemContainer>
  );
};

export default RecomendMotiveContent;
