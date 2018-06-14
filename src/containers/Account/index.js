import { compose, setDisplayName, pure, withStateHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { selectUser, selectProfileCompletedUser } from '../../selectors';
import { saveProfileAction, saveProfileCompanyAction } from '../../actions';
import Account from '../../components/Account';

export default compose(
  connect(
    createSelector(selectUser(), selectProfileCompletedUser(), (user, userCompleted) => ({
      user,
      userCompleted,
    })),
    { saveProfileAction, saveProfileCompanyAction },
  ),
  withStateHandlers(
    {
      step: 1,
    },
    { setStep: () => step => ({ step }), nextStep: ({ step }) => () => ({ step: step + 1 }) },
  ),
  setDisplayName('AccountContainer'),
  pure,
  lifecycle({
    componentDidMount() {
      console.log(this.props);
    },
  }),
)(Account);
