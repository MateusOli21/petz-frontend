import produce from 'immer';

const INITIAL_STATE = {
  services: [],
};

export default function services(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, (draft) => {
        draft.services = action.payload.user.services;
      });

    case '@service/CREATE_SERVICE_REQUEST':
      return produce(state, (draft) => {
        draft.services.push(action.payload.service);
      });

    case '@service/UPDATE_SERVICE_SUCCESS':
      return produce(state, (draft) => {
        const serviceIndex = draft.services.findIndex(
          (service) => service.id === parseInt(action.payload.service.id)
        );

        if (serviceIndex >= 0) {
          draft.services[serviceIndex] = action.payload.service;
        } else {
          return state;
        }
      });

    case '@service/DELETE_SERVICE_SUCCESS':
      return produce(state, (draft) => {
        const serviceIndex = draft.services.findIndex(
          (service) => service.id === action.payload.id
        );

        if (serviceIndex >= 0) {
          draft.services.splice(serviceIndex, 1);
        } else {
          return state;
        }
      });

    case '@auth/SIGN_OUT':
      return produce(state, (draft) => {
        draft.services = [];
      });

    default:
      return state;
  }
}
