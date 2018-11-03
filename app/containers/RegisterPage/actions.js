/*
 *
 * RegisterPage actions
 *
 */

import {
  UPDATE_FULLNAME,
  UPDATE_PASSWORD,
  UPDATE_EMAIL,
  UPDATE_MOBILENUMBER,
  UPDATE_LICENCENUMBER,
  UPDATE_USERROLE,
  REGISTER_REQUEST,
  REQUEST_ERROR,
  CLEAR_ERROR,
} from './constants';

export function updateFullName(fullName) {
  return {
    type: UPDATE_FULLNAME,
    fullName,
  };
}

export function updateEmail(email) {
  return {
    type: UPDATE_EMAIL,
    email,
  };
}

export function updatePassword(password) {
  return {
    type: UPDATE_PASSWORD,
    password,
  };
}

export function updateMobileNumber(mobileNumberPrimary) {
  return {
    type: UPDATE_MOBILENUMBER,
    mobileNumberPrimary,
  };
}

export function updateLicenceNo(licenceNo) {
  return {
    type: UPDATE_LICENCENUMBER,
    licenceNo,
  };
}

export function updateUserRole(userRole) {
  return {
    type: UPDATE_USERROLE,
    userRole,
  };
}

export function registerRequest() {
  return {
    type: REGISTER_REQUEST,
  };
}

export function requestError(error) {
  return {
    type: REQUEST_ERROR,
    error,
  };
}

export function clearError() {
  return {
    type: CLEAR_ERROR,
  };
}
