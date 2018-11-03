/**
 * LoginPage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.get('global');

const selectLogin = state => state.get('login', initialState);

const makeSelectUsername = () =>
  createSelector(selectLogin, loginState => loginState.get('username'));

const makeSelectPassword = () =>
  createSelector(selectLogin, loginState => loginState.get('password'));

const makeLoginError = () =>
  createSelector(selectGlobal, global => global.get('loginError'));

const makeSelectLoginData = () =>
  createSelector(selectLogin, loginState => loginState.toJS());

export {
  makeSelectUsername,
  makeSelectPassword,
  makeLoginError,
  makeSelectLoginData,
};
