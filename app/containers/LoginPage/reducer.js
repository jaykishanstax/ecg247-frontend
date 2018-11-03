/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import { USER_NAME, USER_PASSWORD, UPDATE_MOBILENUMBER } from './constants';

export const initialState = fromJS({
  email: '',
  password: '',
  mobileNumberPrimary: '',
});

function loginPageReducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case USER_NAME:
      return state.set('email', action.username);
    case USER_PASSWORD:
      return state.set('password', action.password);
    case UPDATE_MOBILENUMBER:
      return state.set('mobileNumberPrimary', action.mobileNumberPrimary);
    default:
      return state;
  }
}

export default loginPageReducer;
