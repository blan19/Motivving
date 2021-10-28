import React, { useCallback, VFC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import Auth from '../../components/Auth';
import { IUser } from '../../dto/IUser';
import TextLogo from '../../lib/styles/svg/TextLogo';
import { AuthContainer, LogoBlock, StyledResponsive } from './Styles';

interface PropsTypes {
  user: IUser | undefined;
}

const Signup: VFC<RouteComponentProps & PropsTypes> = ({ history, user }) => {
  const onClick = useCallback(() => {
    history.push('/main');
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
