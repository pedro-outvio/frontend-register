import { compose, setDisplayName, pure, withStateHandlers } from 'recompose';
import Account from '../components/Account';

export default compose(
  withStateHandlers(
    {
      step: 1,
    },
    { setStep: () => step => ({ step }) },
  ),
  setDisplayName('AccountContainer'),
  pure,
)(Account);
