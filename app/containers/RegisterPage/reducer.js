/*
 *
 * RegisterPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  UPDATE_FULLNAME,
  UPDATE_PASSWORD,
  UPDATE_EMAIL,
  UPDATE_MOBILENUMBER,
  UPDATE_LICENCENUMBER,
} from './constants';

export const initialState = fromJS({
  fullName: '',
  email: '',
  password: '',
  mobileNumberPrimary: '',
  licenceNo: '',
});

function registerPageReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FULLNAME:
      return state.set('fullName', action.fullName);
    case UPDATE_EMAIL:
      return state.set('email', action.email);
    case UPDATE_PASSWORD:
      return state.set('password', action.password);
    case UPDATE_MOBILENUMBER:
      return state.set('mobileNumberPrimary', action.mobileNumberPrimary);
    case UPDATE_LICENCENUMBER:
      return state.set('licenceNo', action.licenceNo);
    default:
      return state;
  }
}

export default registerPageReducer;
