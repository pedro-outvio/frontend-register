import { compose, setDisplayName, pure } from 'recompose';
import { withForm } from 'recompose-extends';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';

import Login from '../../components/Login';
import { loginAction } from '../../actions';

export default compose(
  setDisplayName('LoginContainer'),
  connect(
    null,
    { onLogin: loginAction },
  ),
  withForm(
    {
      email: { value: '', required: true, type: 'email' },
      password: { value: '', required: true },
    },
    ({ onLogin }) => form => {
      onLogin(form).then(() => navigate('/'));
    },
  ),
  pure,
)(Login);
