import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import {
  petsFailure,
  updatePetSuccess,
  createPetSuccess,
  deletePetSuccess,
} from './actions';

export function* createPet({ payload }) {
  try {
    console.log('akldalkndaslnlkn');
    const response = yield call(api.post, 'pets', payload.data);
    const {
      id,
      user_id,
      name,
      sex,
      age,
      weight,
      castred,
      comments,
      avatar,
    } = response.data;
    const pet = {
      id,
      user_id,
      name,
      sex,
      age,
      weight,
      castred,
      comments,
      avatar,
    };
    yield put(createPetSuccess(pet));
    history.push('/pets');
  } catch (err) {
    yield put(petsFailure());
    toast.error('Erro ao tentar criar pet.');
  }
}

export function* updatePet({ payload }) {
  try {
    const { id } = payload.data;
    const response = yield call(api.put, `pets/${id}`, payload.data);
    yield put(updatePetSuccess(response.data));
    history.push('/pets');
  } catch (err) {
    yield put(petsFailure());
    toast.error('Erro ao tentar atualizar informaçõs do pet.');
  }
}

export function* deletePet({ payload }) {
  try {
    const { id } = payload.data;
    yield call(api.delete, `pets/${id}`);
    yield put(deletePetSuccess(id));
    history.push('/pets');
  } catch (err) {
    yield put(petsFailure());
    toast.error('Erro ao tentar atualizar informaçõs do pet.');
  }
}

export default all([
  takeLatest('@pet/UPDATE_PET_REQUEST', updatePet),
  takeLatest('@pet/CREATE_PET_REQUEST', createPet),
  takeLatest('@pet/DELETE_PET_REQUEST', deletePet),
]);
