import React from 'react';
import PropTypes from 'prop-types';
import { compose, setDisplayName, pure } from 'recompose';
import { Form, Message } from 'semantic-ui-react';
import { withForm } from 'recompose-extends';

import { withTypeForm } from '../../hoc';
import { InputTypeForm } from '../Common';

const AccountUser = ({ form, onCompleteField, formError, stepForm, activeStepForm }) => (
  <div>
    {formError && (
      <Message error header="There were errors in the form" content="All fields are required." />
    )}
    <Form autoComplete="off">
      <InputTypeForm
        name="firstname"
        label="Dinos como te llamas"
        value={form.firstname}
        placeholder="Introduce tu nombre"
        active={stepForm === 1}
        onCompleted={onCompleteField}
      />
      <InputTypeForm
        name="lastname"
        label="Dinos cuales son tus apellidos"
        value={form.lastname}
        placeholder="Introduce tus apellidos"
        active={stepForm === 2}
        onCompleted={onCompleteField}
      />
      <InputTypeForm
        name="email"
        label="Dinos cual es tu email"
        value={form.email}
        placeholder="Introduce tu email"
        active={stepForm === 3}
        onCompleted={onCompleteField}
      />
    </Form>
  </div>
);

AccountUser.propTypes = {
  form: PropTypes.shape({}).isRequired,
  formError: PropTypes.bool.isRequired,
  stepForm: PropTypes.number.isRequired,
  onCompleteField: PropTypes.func.isRequired,
  activeStepForm: PropTypes.func.isRequired,
};

export default compose(
  setDisplayName('AccountUserComponent'),
  withForm(
    ({ user }) => ({
      firstname: { value: user.firstname, required: true },
      lastname: { value: user.lastname, required: true },
      email: { value: user.email, required: true, type: 'email' },
    }),
    ({ saveProfileAction, nextStep }) => form => {
      nextStep();
      // saveProfileAction(form);
    },
  ),
  withTypeForm,
  pure,
)(AccountUser);
