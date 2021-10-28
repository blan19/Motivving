import React from 'react';
import { OauthContainer } from './styles';
import { SiNaver } from 'react-icons/si';

const NaverLogin = () => {
  return (
    <OauthContainer type="naver">
      <a href="http://localhost:4000/oauth/naver">
        <div className="symbol">
          <SiNaver />
        </div>
        <span>네이버 로그인</span>
      </a>
    </OauthContainer>
  );
};

export default NaverLogin;
