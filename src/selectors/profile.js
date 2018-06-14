import { createSelector } from 'reselect';
import { selectUser } from './user';

export const selectProfileCompletedUser = () =>
  createSelector(selectUser(), user => {
    if (user.firstname && user.lastname && user.email) {
      return true;
    }
    return false;
  });
