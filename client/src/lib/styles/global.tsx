import { css, Global } from '@emotion/react';

const styles = css`
  @import url('./assets/font/font.css');
  html,
  body {
    background: #ecf0f3;
    font-family: 'Gmaket Sans', sans-serif;
    margin: 0;
    padding: 0;
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
