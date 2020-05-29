import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'petzapp',
      storage,
      whitelist: ['auth', 'user', 'pet'],
    },
    reducers
  );

  return persistedReducer;
};
