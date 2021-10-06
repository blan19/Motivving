import { css, Global } from '@emotion/react';

const styles = css`
  @import url('./assets/font/font.css');
  html,
  body {
    font-size: 62.5%;
    background: #ecf0f3;
    font-family: 'Gmaket Sans', sans-serif;
    margin: 0;
    padding: 0;

    @media screen and (max-width: 1280px) {
      font-size: 56.25%;
    }

    @media screen and (max-width: 1024px) {
      font-size: 50%;
    }

    @media screen and (max-width: 768px) {
      font-size: 37.5%;
    }

    @media screen and (max-width: 480px) {
      font-size: 25%;
    }
  }

  ul,
  li {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  margin: 0;
  padding: 0;

  text-decoration: none;
  list-style: none;
`;

export const GlobalStyles = () => {
  return <Global styles={styles} />;
};
