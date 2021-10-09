import styled from '@emotion/styled';
import Responsive from '../../lib/styles/Responsive';
import { styles } from '../../lib/styles/styles';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;

  position: fixed;
`;

export const ChangeWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const HeaderResponsive = styled(Responsive)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled.div`
  width: 125px;
  svg {
    width: 100%;
    height: 33px;
    cursor: pointer;
  }
`;

export const Nav = styled.div`
  ul {
    display: flex;
  }
  ul > li {
    padding: 1rem;
  }
  ul > li > a {
    color: ${styles.primary.light[0]};
    font-size: 1.75rem;
    font-weight: 600;
  }

  .selected {
    color: ${styles.primary.light[1]};
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    border: none;
    background: none;
    outline: none;

    background: ${styles.primary.light[0]};
    color: ${styles.primary.light[2]};
    font-size: 2rem;
    border-radius: 5px;
    padding: 0.7rem 2rem;
    cursor: pointer;
    margin-left: 2rem;
  }

  svg {
    font-size: 3.5rem;
    cursor: pointer;
  }
`;

export const Space = styled.div`
  width: 100%;
  height: 80px;
`;
