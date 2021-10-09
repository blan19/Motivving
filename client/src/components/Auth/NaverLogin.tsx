import React from 'react';
import { OauthContainer } from './styles';
import { SiNaver } from 'react-icons/si';

const NaverLogin = () => {
  return (
    <OauthContainer type="naver">
      <div className="symbol">
        <SiNaver />
      </div>
      <span>네이버 로그인</span>
    </OauthContainer>
  );
};

export default NaverLogin;
