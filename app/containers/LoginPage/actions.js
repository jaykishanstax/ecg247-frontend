/*
 *
 * LoginPage actions
 *
 */

import {
  USER_NAME,
  USER_PASSWORD,
  LOGIN_REQUEST,
  UPDATE_MOBILENUMBER,
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

export function changeMobNumber(mobNumber) {
  return {
    type: UPDATE_MOBILENUMBER,
    mobNumber,
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
