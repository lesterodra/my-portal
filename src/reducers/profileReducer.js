import { GET_PROFILE } from '../actions/profileAction';

const profile = (state = {}, action) => {
  if (action.type === GET_PROFILE) {
    return action.payload;
  } else {
    return state;
  }
};

export default profile;