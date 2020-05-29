import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import pet from './pet/reducer';

export default combineReducers({ auth, user, pet });
