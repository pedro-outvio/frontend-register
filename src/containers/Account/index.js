import { compose, setDisplayName, pure, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import {
  selectUser,
  selectProfileCompletedUser,
  selectProfileCompletedCompany,
  selectProfileCompletedWarehouses,
  selectCompany,
  selectWarehouses,
} from '../../selectors';
import {
  saveProfileAction,
  saveProfileCompanyAction,
  saveProfileWareHouseAction,
  disableProfileAction,
} from '../../actions';
import Account from '../../components/Account';

export default compose(
  connect(
    createSelector(
      selectUser(),
      selectProfileCompletedUser(),
      selectProfileCompletedCompany(),
      selectProfileCompletedWarehouses(),
      selectWarehouses(),
      selectCompany(),
      (user, userCompleted, companyCompleted, warehousesCompleted, warehouses, company) => ({
        user,
        userCompleted,
        companyCompleted,
        warehousesCompleted,
        warehouses,
        company,
      }),
    ),
    {
      saveProfileAction,
      saveProfileCompanyAction,
      saveProfileWareHouseAction,
      disableProfileAction,
    },
  ),
  withStateHandlers(
    {
      step: 1,
    },
    { setStep: () => step => ({ step }), nextStep: ({ step }) => () => ({ step: step + 1 }) },
  ),
  setDisplayName('AccountContainer'),
  pure,
)(Account);
