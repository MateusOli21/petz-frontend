import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import pet from './pet/sagas';
import establishment from './establishment/sagas';
import service from './service/sagas';

export default function* rootSaga() {
  return yield all([auth, user, pet, establishment, service]);
}
