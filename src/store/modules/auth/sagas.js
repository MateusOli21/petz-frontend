import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'session', { email, password });

    const { token, user } = response.data;

    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
    history.push('/dashboard');
  } catch (err) {
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
