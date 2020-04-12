export const GET_PROFILE = 'GET_PROFILE';

export function getProfile() {
  return (dispatch) => {
    dispatch(loadInfo({ name: 'lester' }));
  }
};

export function loadInfo(payload) {
  return {
    type: GET_PROFILE,
    payload: payload,
  };
}

