/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import { USER_NAME, USER_PASSWORD } from './constants';

export const initialState = fromJS({
  email: '',
  password: '',
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case USER_NAME:
      return state.set('email', action.username);
    case USER_PASSWORD:
      return state.set('password', action.password);
    default:
      return state;
  }
}

export default loginPageReducer;
