/** @jsxImportSource @emotion/react */
import React, { useCallback, useState } from 'react';
import { VideoDetailContainer, VideoDetailContainerStyles } from './styles';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useTheme } from '@emotion/react';
import HashTag from '../../../components/HashTag';

const VideoDetail = () => {
  const theme = useTheme();
  const [like, setLike] = useState(false);

  const onHandleLike = useCallback(() => {
    setLike((prev) => !prev);
  }, []);
  return (
    <VideoDetailContainer css={VideoDetailContainerStyles(theme)}>
      <div className="title">
        <h1>도전을 시작하는 당신에게</h1>
        <div className="like">
          <h1>좋아요</h1>
          <div className="svg" onClick={onHandleLike}>
            {like ? <FaHeart /> : <FaRegHeart />}
          </div>
        </div>
      </div>
      <div className="info">
        <HashTag text={['용기', '시작']} />
      </div>
      <div className="etc">
        <div className="view">
          <span>조회수 21회</span>
        </div>
        <div className="provider">
          <span>Youtube</span>
        </div>
      </div>
      <div className="divider"></div>
    </VideoDetailContainer>
  );
};

export default VideoDetail;
