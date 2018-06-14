import React from 'react';
import PropTypes from 'prop-types';
import { compose, setDisplayName, pure } from 'recompose';
import { Form, Button, Container } from 'semantic-ui-react';
import { withForm } from 'recompose-extends';

import { InputChange, CountriesSelect } from '../Common';
import { withLocationForm } from '../../hoc';

const AccountWareHouse = ({
  form,
  updateForm,
  submitForm,
  updatePostCode,
  updateCountry,
  formFieldsWithErrors,
}) => (
  <div>
    <Form>
      <Form.Field>
        <label htmlFor="alias">
          Warehouse Alias
          <Form.Input
            name="alias"
            value={form.alias}
            onChange={updateForm}
            id="alias"
            placeholder="Enter your warehouse alias"
            error={formFieldsWithErrors.includes('alias')}
          />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="postcode">
          Warehouse zip code
          <InputChange
            value={form.postcode}
            onChange={updatePostCode}
            name="postcode"
            id="postcode"
            placeholder="Enter your warehouse zip code"
            error={formFieldsWithErrors.includes('postcode')}
          />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="country">
          Warehouse updateCountry
          <CountriesSelect name="country" value={form.country} onChange={updateCountry} />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="city">
          Warehouse city
          <Form.Input
            name="city"
            id="city"
            value={form.city}
            onChange={updateForm}
            placeholder="Enter the city of your warehouse"
            error={formFieldsWithErrors.includes('city')}
          />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="address">
          Warehouse address
          <Form.Input
            value={form.address}
            onChange={updateForm}
            name="address"
            id="address"
            placeholder="Enter the address of your warehouse"
            error={formFieldsWithErrors.includes('address')}
          />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="contactPerson">
          Contact person
          <Form.Input
            value={form.contactPerson}
            onChange={updateForm}
            name="contactPerson"
            id="contactPerson"
            placeholder="Enter the contact person"
            error={formFieldsWithErrors.includes('contactPerson')}
          />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="contactPhone">
          Contact phone number
          <Form.Input
            value={form.contactPhone}
            onChange={updateForm}
            name="contactPhone"
            id="contactPhone"
            placeholder="Enter the contact phone number"
            error={formFieldsWithErrors.includes('contactPhone')}
          />
        </label>
      </Form.Field>
    </Form>
    <Container textAlign="center">
      <Button positive onClick={submitForm} type="submit">
        Save
      </Button>
    </Container>
  </div>
);

AccountWareHouse.propTypes = {
  form: PropTypes.shape({}).isRequired,
  updateForm: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  updatePostCode: PropTypes.func.isRequired,
  updateCountry: PropTypes.func.isRequired,
  formFieldsWithErrors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default compose(
  setDisplayName('AccountWareHouseComponent'),
  withForm({
    alias: { value: '', required: true },
    postcode: { value: '', required: true, pattern: '^(0|[1-9][0-9]*)$' },
    country: { value: '', required: true },
    city: { value: '', required: true },
    address: { value: '', required: true },
    contactPerson: { value: '', required: true },
    contactPhone: { value: '', required: true, pattern: '^(0|[1-9][0-9]*)$' },
  }),
  withLocationForm,
  pure,
)(AccountWareHouse);
