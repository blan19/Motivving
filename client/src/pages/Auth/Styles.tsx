import styled from '@emotion/styled';
import Responsive from '../../lib/styles/Responsive';

export const AuthContainer = styled.div`
  width: 100%;
  position: relative;

  .circle {
    position: absolute;
  }
`;

export const StyledResponsive = styled(Responsive)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 8rem;

  svg {
    width: 100%;
  }
`;

export const LogoBlock = styled.div`
  cursor: pointer;
`;
