import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import {
  establishmentFailure,
  createEstablishmentSuccess,
  updateEstablishmentSuccess,
  deleteEstablishmentSuccess,
} from './actions';

export function* createEstablishment({ payload }) {
  try {
    const response = yield call(api.post, 'establishments', payload.data);
    const {
      id,
      name,
      email,
      contact,
      location,
      user_id,
      avatar,
    } = response.data;

    const pet = { id, name, email, contact, location, user_id, avatar };
    yield put(createEstablishmentSuccess(pet));
    history.push('/establishments');
    toast.success('Estabelecimento criado com sucesso.');
  } catch (err) {
    yield put(establishmentFailure());
    toast.error('Erro ao tentar criar estabelecimento.');
  }
}

export function* updateEstablishment({ payload }) {
  try {
    const { id } = payload.data;
    const response = yield call(api.put, `establishments/${id}`, payload.data);
    yield put(updateEstablishmentSuccess(response.data));
    toast.success('Estabelecimento atualizado com sucesso.');
    history.push('/establishments');
  } catch (err) {
    yield put(establishmentFailure());
    toast.error('Erro ao tentar atualizar informaçõs do estabelecimento.');
  }
}

export function* deleteEstablishment({ payload }) {
  try {
    const { id } = payload.data;
    yield call(api.delete, `establishments/${id}`);
    yield put(deleteEstablishmentSuccess(id));
    toast.success('Estabelecimento deletado com sucesso.');
    history.push('/establishments');
  } catch (err) {
    yield put(establishmentFailure());
    toast.error('Erro ao tentar atualizar informaçõs do estabelecimento.');
  }
}

export default all([
  takeLatest(
    '@establishment/CREATE_ESTABLISHMENT_REQUEST',
    createEstablishment
  ),
  takeLatest(
    '@establishment/UPDATE_ESTABLISHMENT_REQUEST',
    updateEstablishment
  ),
  takeLatest(
    '@establishment/DELETE_ESTABLISHMENT_REQUEST',
    deleteEstablishment
  ),
]);
