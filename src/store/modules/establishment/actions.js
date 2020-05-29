export function createEstablishmentRequest(data) {
  return {
    type: '@establishment/CREATE_ESTABLISHMENT_REQUEST',
    payload: { data },
  };
}

export function createEstablishmentSuccess(establishment) {
  return {
    type: '@establishment/CREATE_ESTABLISHMENT_SUCCESS',
    payload: { establishment },
  };
}

export function updateEstablishmentRequest(data) {
  return {
    type: '@establishment/UPDATE_ESTABLISHMENT_REQUEST',
    payload: { data },
  };
}

export function updateEstablishmentSuccess(establishment) {
  return {
    type: '@establishment/UPDATE_ESTABLISHMENT_SUCCESS',
    payload: { establishment },
  };
}

export function deleteEstablishmentRequest(data) {
  return {
    type: '@establishment/DELETE_ESTABLISHMENT_REQUEST',
    payload: { data },
  };
}

export function deleteEstablishmentSuccess(id) {
  return {
    type: '@establishment/DELETE_ESTABLISHMENT_SUCCESS',
    payload: { id },
  };
}

export function establishmentFailure() {
  return {
    type: '@establishment/ESTABLISHMENTS_FAILURE',
  };
}
