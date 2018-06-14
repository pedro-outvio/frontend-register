import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, setDisplayName, lifecycle, pure } from 'recompose';
import { createSelector } from 'reselect';

import { userAction } from '../../actions';
import { selectLogged } from '../../selectors';

const AuthView = ({ children, logged }) => <div>{logged ? children : false}</div>;

AuthView.propTypes = {
  children: PropTypes.node.isRequired,
  logged: PropTypes.bool,
};

AuthView.defaultProps = {
  logged: false,
};

export default compose(
  setDisplayName('AuthContainer'),
  connect(
    createSelector(selectLogged(), logged => ({ logged })),
    {
      userAction,
    },
  ),
  lifecycle({
    componentDidMount() {
      this.props.userAction();
    },
  }),
  pure,
)(AuthView);
