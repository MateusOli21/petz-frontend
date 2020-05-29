import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import pet from './user/sagas';

export default function* rootSaga() {
  return yield all([auth, user, pet]);
}
