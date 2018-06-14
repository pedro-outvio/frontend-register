import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';

const Login = ({ form, submitForm, updateForm, formFieldsWithErrors }) => (
  <Form>
    <Form.Field>
      <Form.Input
        name="email"
        value={form.email}
        onChange={updateForm}
        placeholder="Introduce tu email"
        error={formFieldsWithErrors.includes('email')}
      />
    </Form.Field>
    <Form.Field>
      <Form.Input
        name="password"
        value={form.password}
        onChange={updateForm}
        type="password"
        placeholder="Introduce tu contraseña"
        error={formFieldsWithErrors.includes('password')}
      />
    </Form.Field>
    <Button positive type="submit" onClick={submitForm}>
      Login
    </Button>
  </Form>
);

Login.propTypes = {
  form: PropTypes.shape({}).isRequired,
  submitForm: PropTypes.func.isRequired,
  updateForm: PropTypes.func.isRequired,
  formFieldsWithErrors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Login;
