import { call, put, select, takeLatest } from 'redux-saga/effects';

import { doPost } from 'utils/request';
import { push } from 'react-router-redux';
import { makeSelectLoginData } from 'containers/LoginPage/selectors';
import { LOGIN_REQUEST } from './constants';
import { requestError } from './actions';

import { authentication } from '../App';

export function* setLoginData() {
  const data = yield select(makeSelectLoginData());
  const requestURL = `/api/login/`;
  try {
    const response = yield call(doPost, requestURL, data);
    if (response === 'login') {
      authentication.addToken(data.username);
      yield put(push('/home'));
    } else {
      yield put(
        push('/login', {
          message: '*Email And Password is not valid.',
        }),
      );
    }
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
