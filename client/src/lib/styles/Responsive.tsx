import React, { FC } from 'react';
import styled from '@emotion/styled';

const ResponsiveBlock = styled.div``;

const Responsive: FC = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
