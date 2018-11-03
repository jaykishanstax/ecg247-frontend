import { call, put, select, takeLatest } from 'redux-saga/effects';

import { doPost } from 'utils/request';
import { push } from 'react-router-redux';
import { makeSelectRegistrationData } from 'containers/RegisterPage/selectors';
import { REGISTER_REQUEST } from './constants';
import { requestError } from './actions';

export function* setRegisterData() {
  const data = yield select(makeSelectRegistrationData());
  const requestURL = `/api/registration/`;
  try {
    const response = yield call(doPost, requestURL, data);
    if (response === 'user created') {
      yield put(
        push('/login', {
          message: '*Account created successfully, Please login.',
        }),
      );
    }
  } catch (err) {
    yield put(requestError(err));
  }
}

export default function* watchSetRegisterData() {
  yield takeLatest(REGISTER_REQUEST, setRegisterData);
}
