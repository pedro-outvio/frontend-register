import { PROFILE_SAVE_COMPANY, PROFILE_SAVE_COMPANY_COMPLETED } from '../constants';
import { saveCompanyProfile } from '../utils/api';

export const saveProfileCompanyAction = form => (dispatch, getState) => {
  const { user } = getState();

  dispatch({ type: PROFILE_SAVE_COMPANY });

  return saveCompanyProfile(form, user.user.storeSettings._id).then(() => {
    dispatch({ type: PROFILE_SAVE_COMPANY_COMPLETED });
  });
};
