/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React, { FC, useCallback, useState } from 'react';
import { RecomendItemContainer, RecomendItemContainerStyles } from './styles';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

const RecomendMotiveContent: FC = () => {
  const theme = useTheme();
  const [like, setLike] = useState(false);

  const onToggle = useCallback(() => {
    setLike((prev) => !prev);
  }, []);
  return (
    <RecomendItemContainer css={RecomendItemContainerStyles(theme)}>
      <div className="thumb"></div>
      <div className="video-title">
        <span>도전을 시작하는 당신에게</span>
        {like ? (
          <div className="like" onClick={onToggle}>
            <FaHeart />
          </div>
        ) : (
          <div className="like" onClick={onToggle}>
            <FaRegHeart />
          </div>
        )}
      </div>
      <div className="video-desc">
        <div className="view">조회수 | 0회</div>
        <div className="provider">Youtube</div>
      </div>
      <div className="video-hashtag">
        <div className="hashtag">#용기</div>
        <div className="hashtag">#시작</div>
      </div>
    </RecomendItemContainer>
  );
};

export default RecomendMotiveContent;
