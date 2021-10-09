import React, { useCallback, useRef, VFC } from 'react';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';
import useHover from '../../hook/useHover';
import Logo from '../../lib/styles/svg/Logo';
import {
  HeaderContainer,
  HeaderResponsive,
  HeaderLogo,
  Space,
  Nav,
  User,
  ChangeWrapper,
} from './styles';
import { FiSearch } from 'react-icons/fi';

const Header: VFC<RouteComponentProps> = ({ history }) => {
  const hoverRef = useRef(null);
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
            <Nav>
              <ul>
                <li ref={hoverRef}>
                  <NavLink activeClassName="selected" to="/main">
                    Main
                  </NavLink>
                </li>
                <li ref={hoverRef}>
                  <NavLink activeClassName="selected" to="/category/all">
                    Category
                  </NavLink>
                </li>
                <li ref={hoverRef}>
                  <NavLink activeClassName="selected" to="/account">
                    My Motive
                  </NavLink>
                </li>
              </ul>
            </Nav>
            <User>
              <FiSearch />
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
