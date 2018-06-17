import { createSelector } from 'reselect';

export const selectStateUser = () => state => state.user;

export const selectUser = () => createSelector(selectStateUser(), stateUser => stateUser.user);

export const selectLogged = () => createSelector(selectStateUser(), stateUser => stateUser.logged);

export const selectListAddress = () =>
  createSelector(selectStateUser(), stateUser => stateUser.user.addresses);

export const selectCompany = () =>
  createSelector(selectStateUser(), stateUser => stateUser.user.storeSettings.company);

export const selectWarehouses = () =>
  createSelector(selectStateUser(), stateUser => stateUser.user.storeSettings.warehouses);
