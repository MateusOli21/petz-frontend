export function createPetsRequest(data) {
  return {
    type: '@pet/CREATE_PET_REQUEST',
    payload: { data },
  };
}

export function createPetSuccess(pet) {
  return {
    type: '@pet/CREATE_PET_SUCCESS',
    payload: { pet },
  };
}

export function updatePetRequest(data) {
  return {
    type: '@pet/UPDATE_PET_REQUEST',
    payload: { data },
  };
}

export function updatePetSuccess(pet) {
  return {
    type: '@pet/UPDATE_PET_SUCCESS',
    payload: { pet },
  };
}

export function deletePetRequest(data) {
  return {
    type: '@pet/DELETE_PET_REQUEST',
    payload: { data },
  };
}

export function deletePetSuccess(id) {
  return {
    type: '@pet/DELETE_PET_SUCCESS',
    payload: { id },
  };
}

export function petsFailure() {
  return {
    type: '@pet/PETS_FAILURE',
  };
}
