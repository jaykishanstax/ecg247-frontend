/**
 * LoginPage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.get('global');

const selectLogin = state => state.get('login', initialState);

const makeSelectUsername = () =>
  createSelector(selectLogin, registerState => registerState.get('username'));

const makeSelectPassword = () =>
  createSelector(selectLogin, registerState => registerState.get('password'));

const makeLoginError = () =>
  createSelector(selectGlobal, global => global.get('loginError'));

const makeSelectLoginData = () =>
  createSelector(selectLogin, registerState => registerState.toJS());

export {
  makeSelectUsername,
  makeSelectPassword,
  makeLoginError,
  makeSelectLoginData,
};
