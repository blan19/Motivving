import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Responsive from '../../lib/styles/Responsive';
import { styles } from '../../lib/styles/styles';
import { Theme } from '../../lib/styles/Theme';

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

export const Nav = styled.div<{ isDarkMode?: boolean }>`
  ul {
    display: flex;
  }
  ul > li {
    padding: 1rem;
    margin: 1rem;
    border-radius: 15px;
    &:hover {
      background: ${(props) => (props.isDarkMode ? '#292a2d' : '#dee2e6')};
    }
  }
  ul > li > a {
    font-size: 1.75rem;
    font-weight: 600;
  }

  .selected {
    color: ${styles.primary.light[1]};
  }
`;

export const NavStyles = (theme: Theme) => css`
  ul li a {
    font-size: 1.75rem;
    font-weight: 600;
  }
`;

export const NavLinkStyles = (theme: Theme) => css`
  color: ${theme.font};
`;

export const User = styled.div<{ isDarkMode?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    border: none;
    background: none;
    outline: none;

    font-size: 2rem;
    border-radius: 5px;
    padding: 0.7rem 2rem;
    cursor: pointer;
    margin-left: 2rem;
  }

  .search {
    &:hover {
      background: ${(props) => (props.isDarkMode ? '#292a2d' : '#dee2e6')};
    }
  }

  svg {
    font-size: 3.5rem;
    cursor: pointer;
  }
`;

export const UserStyles = (theme: Theme) => css`
  button {
    background: ${theme.primary};
    color: ${theme.buttonFont};
  }

  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 15px;
  }

  svg {
    color: ${theme.input};
  }
`;

export const Space = styled.div`
  width: 100%;
  height: 80px;
`;
