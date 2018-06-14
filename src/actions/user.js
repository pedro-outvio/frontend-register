import localForage from 'localforage';

import {
  USER_LOGIN,
  USER_LOGIN_COMPLETED,
  USER_LOGIN_ERROR,
  USER_LOAD,
  USER_UPDATE,
} from '../constants';
import { requestLogin, requestUser, saveProfile } from '../utils/api';

export const userAction = () => dispatch =>
  requestUser().then(res => {
    dispatch({ type: USER_LOAD, user: res.user });
  });

export const loginAction = form => dispatch => {
  dispatch({ type: USER_LOGIN });

  return requestLogin(form)
    .then(({ token }) => localForage.setItem('token', token))
    .then(data => {
      dispatch({ type: USER_LOGIN_COMPLETED, data });
    })
    .catch(error => {
      dispatch({ type: USER_LOGIN_ERROR, error });
    });
};

export const saveProfileAction = form => (dispatch, getState) => {
  dispatch({ type: USER_UPDATE });

  const { user } = getState();

  return saveProfile(form, user.user._id).then(data => {
    console.log(data);
  });
};
