export function createServiceRequest(data) {
  return {
    type: '@service/CREATE_SERVICE_REQUEST',
    payload: { data },
  };
}

export function createServiceSuccess(service) {
  return {
    type: '@service/CREATE_SERVICE_SUCCESS',
    payload: { service },
  };
}

export function updateServiceRequest(data) {
  return {
    type: '@service/UPDATE_SERVICE_REQUEST',
    payload: { data },
  };
}

export function updateServiceSuccess(service) {
  return {
    type: '@service/UPDATE_SERVICE_SUCCESS',
    payload: { service },
  };
}

export function deleteServiceRequest(data) {
  return {
    type: '@service/DELETE_SERVICE_REQUEST',
    payload: { data },
  };
}

export function deleteServiceSuccess(id) {
  return {
    type: '@service/DELETE_SERVICE_SUCCESS',
    payload: { id },
  };
}

export function serviceFailure() {
  return {
    type: '@service/SERVICES_FAILURE',
  };
}
