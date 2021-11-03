import React from 'react';
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import styled from '@emotion/styled';

const Star = () => {
  return <StyledStar />;
};

export default Star;

const StyledStar = styled(Rate)`
  font-size: 5rem;
`;
