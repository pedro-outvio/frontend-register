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
        <label htmlFor="name">
          Name
          <Form.Input
            name="name"
            id="name"
            value={form.name}
            placeholder="Enter your name"
            onChange={updateForm}
            error={formFieldsWithErrors.includes('name')}
          />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="surname">
          Surname
          <Form.Input
            name="surname"
            id="surname"
            value={form.surname}
            placeholder="Enter your surname"
            onChange={updateForm}
            error={formFieldsWithErrors.includes('surname')}
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
  withForm({
    name: { value: '', required: true },
    surname: { value: '', required: true },
    email: { value: '', required: true, type: 'email' },
  }),
  pure,
)(AccountUser);
