/** @jsxImportSource @emotion/react */
import React, { useCallback, VFC } from 'react';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';
import Logo from '../../lib/styles/svg/Logo';
import {
  HeaderContainer,
  HeaderResponsive,
  HeaderLogo,
  Space,
  Nav,
  User,
  ChangeWrapper,
  UserStyles,
  NavStyles,
  NavLinkStyles,
} from './styles';
import { FiSearch } from 'react-icons/fi';
import { useTheme } from '@emotion/react';
import useDarkMode from '../../hook/useDartkMode';

const Header: VFC<RouteComponentProps> = ({ history }) => {
  const theme = useTheme();
  const { isDarkMode } = useDarkMode();
  const onPush = useCallback(
    (type: string) => {
      if (type === 'main') {
        history.push('/main');
      }
      if (type === 'login') {
        history.push('/login');
      }
    },
    [history],
  );
  return (
    <>
      <HeaderContainer>
        <ChangeWrapper>
          <HeaderResponsive>
            <HeaderLogo onClick={() => onPush('main')}>
              <Logo />
            </HeaderLogo>
            <Nav isDarkMode={isDarkMode} css={NavStyles(theme)}>
              <ul>
                <li>
                  <NavLink
                    css={NavLinkStyles(theme)}
                    activeClassName="selected"
                    to="/main"
                  >
                    Main
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    css={NavLinkStyles(theme)}
                    activeClassName="selected"
                    to="/category/all"
                  >
                    Category
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    css={NavLinkStyles(theme)}
                    activeClassName="selected"
                    to="/account"
                  >
                    My Motive
                  </NavLink>
                </li>
              </ul>
            </Nav>
            <User isDarkMode={isDarkMode} css={UserStyles(theme)}>
              <div className="search">
                <FiSearch />
              </div>
              <button onClick={() => onPush('login')}>Login</button>
            </User>
          </HeaderResponsive>
        </ChangeWrapper>
      </HeaderContainer>
      <Space />
    </>
  );
};

export default withRouter(Header);
