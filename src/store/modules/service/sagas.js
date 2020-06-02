import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import {
  serviceFailure,
  createServiceSuccess,
  updateServiceSuccess,
  deleteServiceSuccess,
} from './actions';

export function* createService({ payload }) {
  try {
    const { id: establishmentId } = payload.data;
    const response = yield call(api.post, 'services', payload.data);
    const { id, name, value, time } = response.data;

    const service = { id, name, value, time };
    yield put(createServiceSuccess(service));
    history.push(`/establishments/${establishmentId}/services`);
    toast.success('Serviço criado com sucesso.');
  } catch (err) {
    yield put(serviceFailure());
    toast.error('Erro ao tentar criar serviço.');
  }
}

export function* updateService({ payload }) {
  try {
    const { id, establishmentId, ...rest } = payload.data;
    const service = { ...rest };

    const response = yield call(
      api.put,
      `services/${establishmentId}/${id}`,
      service
    );
    yield put(updateServiceSuccess(response.data));
    toast.success('Serviço atualizado com sucesso.');
    history.push(`/establishments/${establishmentId}/services`);
  } catch (err) {
    yield put(serviceFailure());
    toast.error('Erro ao tentar atualizar informaçõs do serviço.');
  }
}

export function* deleteService({ payload }) {
  try {
    const { id, establishmentId } = payload.data;

    yield call(api.delete, `services/${establishmentId}/${id}`);
    yield put(deleteServiceSuccess(id));
    toast.success('Serviço deletado com sucesso.');
    history.push(`/establishments/${establishmentId}/services`);
  } catch (err) {
    yield put(serviceFailure());
    toast.error('Erro ao tentar atualizar informaçõs do serviço.');
  }
}

export default all([
  takeLatest('@service/CREATE_SERVICE_REQUEST', createService),
  takeLatest('@service/UPDATE_SERVICE_REQUEST', updateService),
  takeLatest('@service/DELETE_SERVICE_REQUEST', deleteService),
]);
