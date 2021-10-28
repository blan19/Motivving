import React from 'react';
import { OauthContainer } from './styles';
import { BsChatFill } from 'react-icons/all';

const KaKaoLogin = () => {
  return (
    <OauthContainer type="kakao">
      <a href="http://localhost:4000/oauth/kakao">
        <div className="symbol">
          <BsChatFill />
        </div>
        <span>카카오 로그인</span>
      </a>
    </OauthContainer>
  );
};

export default KaKaoLogin;
