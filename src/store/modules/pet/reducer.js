import produce from 'immer';

const INITIAL_STATE = {
  pets: [],
};

export default function pets(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, (draft) => {
        draft.pets = action.payload.user.pets;
      });

    case '@pet/CREATE_PET_SUCCESS':
      return produce(state, (draft) => {
        draft.pets.push(action.payload.pet);
      });

    case '@user/UPDATE_PET_SUCCESS':
      return produce(state, (draft) => {
        const petIndex = draft.pets.findIndex(
          (pet) => pet.id === parseInt(action.payload.pet.id)
        );

        if (petIndex >= 0) {
          draft.pets[petIndex] = action.payload.pet;
        } else {
          return state;
        }
      });

    case '@pet/DELETE_PET_SUCCESS':
      return produce(state, (draft) => {
        const petIndex = draft.pets.findIndex(
          (pet) => pet.id === action.payload.id
        );

        if (petIndex >= 0) {
          draft.pets.splice(petIndex, 1);
        } else {
          return state;
        }
      });

    case '@auth/SIGN_OUT':
      return produce(state, (draft) => {
        draft.pets = [];
      });

    default:
      return state;
  }
}
