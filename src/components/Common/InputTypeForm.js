import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Form, Button } from 'semantic-ui-react';
import { compose, setDisplayName, pure, withHandlers, withStateHandlers } from 'recompose';

import styles from './InputTypeForm.scss';

import InputRef from './InputRef';

const InputTypeForm = ({
  value,
  label,
  placeholder,
  name,
  onChange,
  enabled,
  onSendValue,
  active,
  onClick,
}) => (
  <Form.Field className={cn({ [styles.fieldDisabled]: !active })} onClick={onClick}>
    <label htmlFor={name}>
      {label}
      <InputRef
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        active={active}
        onChange={onChange}
        onFocus={onChange}
        className={cn({ [styles.inputDisabled]: !active })}
      />
      {value && !active && <span className={styles.inputValue}>{value}</span>}
    </label>
    {enabled &&
      active && (
        <p>
          <Button onClick={onSendValue}>OK</Button> or press Enter
        </p>
      )}
  </Form.Field>
);

InputTypeForm.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSendValue: PropTypes.func.isRequired,
  enabled: PropTypes.bool.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

InputTypeForm.defaultProps = {
  value: '',
  label: null,
  placeholder: null,
  name: null,
  active: false,
  onClick: undefined,
};

export default compose(
  setDisplayName('InputTypeFormComponent'),
  withStateHandlers(
    ({ value }) => ({
      enabled: false,
      value,
    }),
    { setEnabled: () => (isEnabled, value) => ({ enabled: isEnabled, value }) },
  ),
  withHandlers({
    onChange: ({ setEnabled }) => event => {
      setEnabled(!!event.target.value, event.target.value);
    },
    onSendValue: ({ onCompleted, name, value }) => () => {
      onCompleted(name, value);
    },
  }),
  pure,
)(InputTypeForm);
