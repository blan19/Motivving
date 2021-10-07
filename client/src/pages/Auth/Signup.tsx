import React, { useCallback, VFC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import Auth from '../../components/Auth';
import TextLogo from '../../lib/styles/svg/TextLogo';
import { AuthContainer, LogoBlock, StyledResponsive } from './Styles';

const Signup: VFC<RouteComponentProps> = ({ history }) => {
  const onClick = useCallback(() => {
    history.push('/');
  }, [history]);
  return (
    <AuthContainer>
      <StyledResponsive>
        <LogoBlock onClick={onClick}>
          <TextLogo />
        </LogoBlock>
        <Auth type="signup" />
      </StyledResponsive>
    </AuthContainer>
  );
};

export default withRouter(Signup);
