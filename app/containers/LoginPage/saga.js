import { call, put, select, takeLatest } from 'redux-saga/effects';

import { doPost } from 'utils/request';
import { makeSelectLoginData } from 'containers/LoginPage/selectors';
import { LOGIN_REQUEST } from './constants';
import { requestError } from './actions';

export function* setLoginData() {
  const data = yield select(makeSelectLoginData());
  const requestURL = `/api/login/`;
  try {
    const response = yield call(doPost, requestURL, data);
    console.log(response);
    if (response !== 'login') {
      yield put(requestError(response));
    }
  } catch (err) {
    yield put(requestError(err));
  }
}

export default function* watchSetLoginData() {
  yield takeLatest(LOGIN_REQUEST, setLoginData);
}
