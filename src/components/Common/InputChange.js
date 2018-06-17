import React from 'react';
import { compose, pure, withState, withHandlers } from 'recompose';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';
import cn from 'classnames';

import styles from './InputChange.scss';

let timer = null;
const WAIT_INTERVAL = 1000;
const ENTER_KEY = 13;

const InputChange = ({ name, value, onChangeInput, onKeyDown, error, placeholder }) => (
  <Input
    name={name}
    value={value}
    onChange={onChangeInput}
    onKeyDown={onKeyDown}
    error={error}
    placeholder={placeholder}
    className={cn({ [styles.error]: error })}
  />
);

InputChange.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  onChangeInput: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
};

InputChange.defaultProps = {
  name: null,
  value: '',
  error: false,
  placeholder: null,
};

export default compose(
  withState('value', 'setValue', ({ value }) => value),
  withHandlers({
    triggerChange: ({ value, name, onChange }) => () => {
      onChange(name, value);
    },
  }),
  withHandlers({
    onChangeInput: ({ setValue, triggerChange }) => (event, { value }) => {
      clearTimeout(timer);
      setValue(value);

      timer = setTimeout(triggerChange, WAIT_INTERVAL);
    },
    onKeyDown: ({ triggerChange }) => e => {
      if (e.keyCode === ENTER_KEY) {
        triggerChange();
      }
    },
  }),
  pure,
)(InputChange);
