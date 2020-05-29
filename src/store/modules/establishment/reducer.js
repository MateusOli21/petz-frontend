import produce from 'immer';

const INITIAL_STATE = {
  establishments: [],
};

export default function establishments(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, (draft) => {
        draft.establishments = action.payload.user.establishments;
      });

    case '@establishment/CREATE_ESTABLISHMENT_SUCCESS':
      return produce(state, (draft) => {
        draft.establishments.push(action.payload.establishment);
      });

    case '@establishment/UPDATE_ESTABLISHMENT_SUCCESS':
      return produce(state, (draft) => {
        const establishmentIndex = draft.establishments.findIndex(
          (establishment) =>
            establishment.id === parseInt(action.payload.establishment.id)
        );

        if (establishmentIndex >= 0) {
          draft.establishments[establishmentIndex] =
            action.payload.establishment;
        } else {
          return state;
        }
      });

    case '@establishment/DELETE_ESTABLISHMENT_SUCCESS':
      return produce(state, (draft) => {
        const establishmentIndex = draft.establishments.findIndex(
          (establishment) => establishment.id === action.payload.id
        );

        if (establishmentIndex >= 0) {
          draft.establishments.splice(establishmentIndex, 1);
        } else {
          return state;
        }
      });

    case '@auth/SIGN_OUT':
      return produce(state, (draft) => {
        draft.establishments = [];
      });

    default:
      return state;
  }
}
