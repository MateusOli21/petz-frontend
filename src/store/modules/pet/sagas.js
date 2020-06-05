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

    yield put(
      createPetSuccess({
        id,
        user_id,
        name,
        sex,
        age,
        weight,
        castred,
        comments,
        avatar,
      })
    );

    toast.sucess('Pet criado com sucesso.');
    history.push('/pets');
  } catch (err) {
    yield put(petsFailure());
    toast.error('Erro ao tentar criar pet.');
  }
}

export function* updatePet({ payload }) {
  try {
    const { petId, ...rest } = payload.data;
    const petUpdate = { ...rest };

    const response = yield call(api.put, `pets/${petId}`, petUpdate);
    const {
      id,
      name,
      sex,
      age,
      weight,
      castred,
      avatar,
      comments,
    } = response.data;

    yield put(
      updatePetSuccess({
        id,
        name,
        sex,
        age,
        weight,
        castred,
        avatar,
        comments,
      })
    );

    toast.success('Pet atualizado com sucesso.');
    history.push('/pets');
  } catch (err) {
    yield put(petsFailure());
    toast.error('Erro ao tentar atualizar informaçõs do pet.');
  }
}

export function* deletePet({ payload }) {
  try {
    const id = payload.data;
    yield call(api.delete, `pets/${parseInt(id)}`);
    yield put(deletePetSuccess(id));

    toast.success('Pet deletado com sucesso.');
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
