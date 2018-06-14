import React from 'react';
import PropTypes from 'prop-types';
import { compose, setDisplayName, pure } from 'recompose';
import { Form, Button, Message, Container } from 'semantic-ui-react';
import { withForm } from 'recompose-extends';

const AccountUser = ({ form, updateForm, submitForm, formFieldsWithErrors, formError }) => (
  <div>
    {formError && (
      <Message error header="There were errors in the form" content="All fields are required." />
    )}
    <Form>
      <Form.Field>
        <label htmlFor="firstname">
          Name
          <Form.Input
            name="firstname"
            id="firstname"
            value={form.firstname}
            placeholder="Enter your firstname"
            onChange={updateForm}
            error={formFieldsWithErrors.includes('firstname')}
          />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="surname">
          Lastname
          <Form.Input
            name="lastname"
            id="lastname"
            value={form.lastname}
            placeholder="Enter your lastname"
            onChange={updateForm}
            error={formFieldsWithErrors.includes('lastname')}
          />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="email">
          Email
          <Form.Input
            name="email"
            type="email"
            id="email"
            value={form.email}
            placeholder="Enter your email"
            onChange={updateForm}
            error={formFieldsWithErrors.includes('email')}
          />
        </label>
      </Form.Field>
      <Container textAlign="center">
        <Button positive onClick={submitForm} type="submit">
          Save and Continue
        </Button>
      </Container>
    </Form>
  </div>
);

AccountUser.propTypes = {
  form: PropTypes.shape({}).isRequired,
  updateForm: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  formFieldsWithErrors: PropTypes.arrayOf(PropTypes.string).isRequired,
  formError: PropTypes.bool.isRequired,
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
      saveProfileAction(form).then(() => nextStep());
    },
  ),
  pure,
)(AccountUser);
