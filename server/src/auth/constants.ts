import dotenv from 'dotenv';

dotenv.config();
export const constants = {
  secret: process.env.TOKEN_KEY,
  kakaoKey: process.env.KAKAO_KEY,
  kakaoCallbackUrl: process.env.KAKAO_URL,
  naverKey: process.env.NAVER_KEY,
  naverSecret: process.env.NAVER_SECRET,
  naverCallbackUrl: process.env.NAVER_URL,
};
