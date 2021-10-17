import React, { FC } from 'react';
import styled from '@emotion/styled';

const ResponsiveBlock = styled.div`
  width: 1280px;
  margin: 0 auto;

  @media screen and (max-width: 1280px) {
    width: 1024px;
  }

  @media screen and (max-width: 1024px) {
    width: 768px;
  }

  @media screen and (max-width: 768px) {
    width: 480px;
  }

  @media screen and (max-width: 480px) {
    width: 400px;
  }
`;

const Responsive: FC = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
