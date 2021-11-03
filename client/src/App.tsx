import { ThemeProvider } from '@emotion/react';
import loadable from '@loadable/component';
import React from 'react';
import { Route, Switch } from 'react-router';
import useDarkMode from './hook/useDartkMode';
import GlobalStyles from './lib/styles/Global';
import { ResetStyles } from './lib/styles/reset';
import Main from './pages/Main';
import THEME from './lib/styles/Theme';
import { useQuery } from 'react-query';
import { fetcher } from './lib/api/fetch';
import { IUser } from './dto/IUser';

const Landing = loadable(() => import('./pages/Landing'));
const Login = loadable(() => import('./pages/Auth/Login'));
const Signup = loadable(() => import('./pages/Auth/Signup'));
const Category = loadable(() => import('./layout/Category'));
const Account = loadable(() => import('./pages/Accout'));
const Video = loadable(() => import('./pages/Video'));

const App = () => {
  const { isDarkMode } = useDarkMode();
  const { data: userData } = useQuery<IUser>('users', fetcher);

  if (userData) {
    console.log(userData);
  }
  return (
    <>
      <ThemeProvider theme={THEME[isDarkMode ? 'dark' : 'light']}>
        <GlobalStyles />
        <ResetStyles />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/main" component={Main} />
          <Route path="/login" component={Login} />
          <Route
            path="/signup"
            render={(props) => <Signup {...props} user={userData} />}
          />
          <Route path="/category/:category" component={Category} />
          <Route path="/video/:video" component={Video} />
          <Route
            path="/account"
            render={(props) =>
              userData ? <Account {...props} /> : <div>로그인이 필요합니다</div>
            }
          />
        </Switch>
      </ThemeProvider>
    </>
  );
};

export default App;
