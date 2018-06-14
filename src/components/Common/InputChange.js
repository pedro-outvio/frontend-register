import React from 'react';
import { compose, pure, withState, withHandlers } from 'recompose';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

let timer = null;
const WAIT_INTERVAL = 1000;
const ENTER_KEY = 13;

const InputChange = ({ name, onChangeInput, onKeyDown, value, error }) => (
  <Input name={name} onChange={onChangeInput} value={value} error={error} onKeyDown={onKeyDown} />
);

InputChange.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  onChangeInput: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  error: PropTypes.bool,
};

InputChange.defaultProps = {
  name: null,
  value: null,
  error: false,
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
