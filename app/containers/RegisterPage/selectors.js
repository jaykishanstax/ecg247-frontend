import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.get('global');

const makeRegisterError = () =>
  createSelector(selectGlobal, global => global.get('loginError'));

const selectRegsiter = state => state.get('register', initialState);

const makeSelectUsername = () =>
  createSelector(selectRegsiter, registerState =>
    registerState.get('username'),
  );

const makeSelectPassword = () =>
  createSelector(selectRegsiter, registerState =>
    registerState.get('password'),
  );

const makeSelectRegistrationData = () =>
  createSelector(selectRegsiter, registerState => registerState.toJS());

export {
  makeSelectUsername,
  makeSelectPassword,
  makeRegisterError,
  makeSelectRegistrationData,
};
