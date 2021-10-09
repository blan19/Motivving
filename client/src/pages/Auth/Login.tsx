import React, { useCallback, VFC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import Auth from '../../components/Auth';
import TextLogo from '../../lib/styles/svg/TextLogo';
import { AuthContainer, LogoBlock, StyledResponsive } from './Styles';

const Login: VFC<RouteComponentProps> = ({ history }) => {
  const onClick = useCallback(() => {
    history.push('/main');
  }, [history]);
  return (
    <AuthContainer>
      <StyledResponsive>
        <LogoBlock onClick={onClick}>
          <TextLogo />
        </LogoBlock>
        <Auth />
      </StyledResponsive>
    </AuthContainer>
  );
};

export default withRouter(Login);
