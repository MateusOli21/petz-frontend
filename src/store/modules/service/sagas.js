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
    const { establishmentId, ...rest } = payload.data;
    const service = { ...rest };

    const response = yield call(
      api.post,
      `services/${establishmentId}`,
      service
    );
    const { id, name, value, time } = response.data;
    const establishment_id = response.data.establishment.id;

    yield put(
      createServiceSuccess({ id, name, value, time, establishment_id })
    );
    history.push(`/establishments/${establishmentId}/services`);
    toast.success('Serviço criado com sucesso.');
  } catch (err) {
    yield put(serviceFailure());
    toast.error('Erro ao tentar criar serviço.');
  }
}

export function* updateService({ payload }) {
  try {
    const { serviceId, establishmentId, ...rest } = payload.data;
    const service = { ...rest };

    const response = yield call(
      api.put,
      `services/${establishmentId}/${serviceId}`,
      service
    );
    const { id, name, value, time } = response.data;
    const establishment_id = response.data.establishment.id;

    yield put(
      updateServiceSuccess({ id, name, value, time, establishment_id })
    );
    toast.success('Serviço atualizado com sucesso.');
    history.push(`/establishments/${establishmentId}/services`);
  } catch (err) {
    yield put(serviceFailure());
    toast.error('Erro ao tentar atualizar informaçõs do serviço.');
  }
}

export function* deleteService({ payload }) {
  try {
    const { serviceId, establishmentId } = payload.data;

    yield call(api.delete, `services/${establishmentId}/${serviceId}`);
    yield put(deleteServiceSuccess(serviceId));
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
