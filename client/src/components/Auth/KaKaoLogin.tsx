import React from 'react';
import { OauthContainer } from './styles';
import { BsChatFill } from 'react-icons/all';

const KaKaoLogin = () => {
  return (
    <OauthContainer type="kakao">
      <div className="symbol">
        <BsChatFill />
      </div>
      <span>카카오 로그인</span>
    </OauthContainer>
  );
};

export default KaKaoLogin;
