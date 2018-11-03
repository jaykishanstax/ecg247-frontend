/*
 *
 * LoginPage actions
 *
 */

import {
  USER_NAME,
  USER_PASSWORD,
  LOGIN_REQUEST,
  REQUEST_ERROR,
} from './constants';

export function changeUsername(username) {
  return {
    type: USER_NAME,
    username,
  };
}

export function changePassword(password) {
  return {
    type: USER_PASSWORD,
    password,
  };
}

export function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  };
}

export function requestError(error) {
  return {
    type: REQUEST_ERROR,
    error,
  };
}
