import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import pet from './pet/reducer';
import establishment from './establishment/reducer';

export default combineReducers({ auth, user, pet, establishment });
