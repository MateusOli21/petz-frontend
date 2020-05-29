import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', { email, password });
    const { token, user } = response.data;

    api.defaults.headers['Authorization'] = `Bearer ${token}`;
    yield put(signInSuccess(token, user));

    if (user.provider === true) {
      history.push('/establishments');
    } else {
      history.push('/dashboard');
    }
  } catch (err) {
    toast.error('Erro ao realizar login.');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password, provider } = payload;

    yield call(api.post, 'users', { name, email, password, provider });

    toast.success('Conta criada com sucesso. Faça login na aplicação');
    history.push('/');
  } catch (err) {
    toast.error('Erro ao criar conta.');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
