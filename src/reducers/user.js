import { USER_LOAD } from '../constants';

export const initialState = {
  user: null,
  logged: false,
};

export default (state = initialState, action) => {
  const { type, user } = action;

  switch (type) {
    case USER_LOAD:
      return {
        ...state,
        logged: true,
        user,
      };
    default:
      return state;
  }
};
