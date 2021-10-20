/** @jsxImportSource @emotion/react */
import React, { useCallback, useState, VFC } from 'react';
import { Theme } from '../../../lib/styles/Theme';
import { MyMotiveStyles, MyMotiveVideoContainer } from './styles';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import HashTag from '../../../components/HashTag';

interface PropsTypes {
  isTabletOrMobile?: boolean;
  theme: Theme;
}

const dummyData = [1, 2, 3, 4, 5];

const MyMotiveVideo: VFC<PropsTypes> = ({ isTabletOrMobile, theme }) => {
  const [like, setLike] = useState(false);
  const onToggle = useCallback(() => {
    setLike((prev) => !prev);
  }, []);
  return (
    <MyMotiveVideoContainer
      css={MyMotiveStyles(theme)}
      isTabletOrMobile={isTabletOrMobile}
    >
      <div className="title">
        <h1>My Motive</h1>
      </div>
      <div className="myMotive">
        {dummyData.map((_, idx) => (
          <div key={idx} className="myMotive-video">
            <video src="" autoPlay controls></video>
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
            <HashTag text={['용기', '시작']} />
          </div>
        ))}
      </div>
    </MyMotiveVideoContainer>
  );
};

export default MyMotiveVideo;
