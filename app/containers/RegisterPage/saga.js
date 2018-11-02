import { call, put, select, takeLatest } from 'redux-saga/effects';

import { doPost } from 'utils/request';
import { makeSelectRegistrationData } from 'containers/RegisterPage/selectors';
import { REGISTER_REQUEST } from './constants';
import { requestError } from './actions';

export function* setRegisterData() {
  const data = yield select(makeSelectRegistrationData());
  const requestURL = `/api/registration/`;
  try {
    yield call(doPost, requestURL, data);
  } catch (err) {
    yield put(requestError(err));
  }
}

export default function* watchSetRegisterData() {
  yield takeLatest(REGISTER_REQUEST, setRegisterData);
}
