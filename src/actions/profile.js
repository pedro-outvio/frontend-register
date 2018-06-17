import localForage from 'localforage';

import {
  PROFILE_SAVE_COMPANY,
  PROFILE_SAVE_COMPANY_COMPLETED,
  PROFILE_DISABLED,
} from '../constants';
import { saveCompanyProfile, getCountry } from '../utils/api';

export const saveProfileCompanyAction = form => (dispatch, getState) => {
  const { user } = getState();

  dispatch({ type: PROFILE_SAVE_COMPANY });

  return getCountry(form.country).then(country =>
    saveCompanyProfile(
      { storeSettings: { company: { ...form, countryCode: country.code } } },
      user.user.storeSettings._id,
    ).then(() => {
      dispatch({ type: PROFILE_SAVE_COMPANY_COMPLETED });
    }),
  );
};

export const saveProfileWareHouseAction = form => (dispatch, getState) => {
  const { user } = getState();

  dispatch({ type: PROFILE_SAVE_COMPANY });

  return getCountry(form.country).then(country =>
    saveCompanyProfile(
      {
        storeSettings: {
          ...user.user.storeSettings,
          warehouses: [
            ...user.user.storeSettings.warehouses,
            { address: { ...form, countryCode: country.code } },
          ],
        },
      },
      user.user.storeSettings._id,
    ).then(() => {
      dispatch({ type: PROFILE_SAVE_COMPANY_COMPLETED });
    }),
  );
};

export const disableProfileAction = () => dispatch => {
  localForage.setItem('profileDisabled', true).then(data => {
    dispatch({ type: PROFILE_DISABLED });
  });
};
