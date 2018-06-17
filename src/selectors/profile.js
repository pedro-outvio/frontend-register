import { createSelector } from 'reselect';
import { selectUser, selectCompany, selectWarehouses } from './user';

export const selectProfileCompletedUser = () =>
  createSelector(selectUser(), user => {
    if (user.firstname && user.lastname && user.email) {
      return true;
    }
    return false;
  });

export const selectProfileCompletedCompany = () =>
  createSelector(selectCompany(), company => {
    if (
      company.name &&
      company.url &&
      company.postcode &&
      company.country &&
      company.city &&
      company.address
    ) {
      return true;
    } else {
      return false;
    }
  });

export const selectProfileCompletedWarehouses = () =>
  createSelector(selectWarehouses(), warehouses => !!warehouses.length);
