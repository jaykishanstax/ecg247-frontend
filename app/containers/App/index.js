/* eslint-disable no-useless-constructor */
/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';
import localStorage from 'localStorage';

import HomePage from 'containers/HomePage';
import LoginPage from 'containers/LoginPage';
import RegisterPage from 'containers/RegisterPage';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import BookingPage from 'containers/BookingPage/Loadable';
import LogoutPage from 'containers/LogoutPage';

import Header from 'components/Header';
// import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  background: white;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="ECG24*7" defaultTitle="ECG24*7">
        <meta name="description" content="ECG24*7" />
      </Helmet>
      <Header isLoggedIn={authentication.isAuthenticated} />
      <Switch>
        <PublicRoute exact path="/" component={LoginPage} />
        <PrivateRoute exact path="/home" component={HomePage} />
        <PublicRoute exact path="/login" component={LoginPage} />
        <PublicRoute exact path="/register" component={RegisterPage} />
        <PrivateRoute path="/features" component={FeaturePage} />
        <PrivateRoute path="/book-service" component={BookingPage} />
        <PrivateRoute path="/logout" component={LogoutPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
      <GlobalStyle />
    </AppWrapper>
  );
}

export const authentication = {
  isAuthenticated: !!localStorage.getItem('token'),
  clearToken() {
    this.isAuthenticated = false;
    localStorage.removeItem('token');
  },
  addToken(token) {
    this.isAuthenticated = true;
    localStorage.setItem('token', token);
  },
};

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authentication.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
                message:
                  rest.path === '/logout'
                    ? '*Logged Out Successfully.'
                    : '*You must login to access the content.',
              },
            }}
          />
        )
      }
    />
  );
}

function PublicRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        !authentication.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/home',
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
}
