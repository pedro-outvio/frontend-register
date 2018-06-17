import React from 'react';
import PropTypes from 'prop-types';
import { compose, setDisplayName, pure } from 'recompose';
import { Form, Button, Container, Card, Icon } from 'semantic-ui-react';
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
  warehouses,
}) => (
  <div>
    {warehouses.length > 0 && (
      <Card.Group>
        {warehouses.map(item => (
          <Card key={item._id}>
            <Card.Content>
              {!item.isActive && <Icon floated="right" name="warning sign" />}
              <Card.Header>{item.address.name}</Card.Header>
              {item.isDefault && <Card.Meta>POR DEFECTO</Card.Meta>}
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    )}
    {warehouses.length === 0 && (
      <Form>
        <Form.Field>
          <label htmlFor="alias">
            Warehouse Alias
            <Form.Input
              name="name"
              value={form.name}
              onChange={updateForm}
              id="name"
              placeholder="Enter your warehouse alias"
              error={formFieldsWithErrors.includes('name')}
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
          <label htmlFor="contactName">
            Contact person
            <Form.Input
              value={form.contactName}
              onChange={updateForm}
              name="contactName"
              id="contactName"
              placeholder="Enter the contact person"
              error={formFieldsWithErrors.includes('contactName')}
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
        <Container textAlign="center">
          <Button positive onClick={submitForm} type="submit">
            Save and Continue
          </Button>
        </Container>
      </Form>
    )}
  </div>
);

AccountWareHouse.propTypes = {
  form: PropTypes.shape({}).isRequired,
  updateForm: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  updatePostCode: PropTypes.func.isRequired,
  updateCountry: PropTypes.func.isRequired,
  formFieldsWithErrors: PropTypes.arrayOf(PropTypes.string).isRequired,
  warehouses: PropTypes.arrayOf(PropTypes.shape({})),
};

AccountWareHouse.defaultProps = {
  warehouses: [],
};

export default compose(
  setDisplayName('AccountWareHouseComponent'),
  withForm(
    {
      name: { value: '', required: true },
      postcode: { value: '', required: true, pattern: '^(0|[1-9][0-9]*)$' },
      country: { value: '', required: true },
      city: { value: '', required: true },
      address: { value: '', required: true },
      contactName: { value: '', required: true },
      contactPhone: { value: '', required: true, pattern: '^(0|[1-9][0-9]*)$' },
    },
    ({ saveProfileWareHouseAction }) => form => {
      saveProfileWareHouseAction(form);
    },
  ),
  withLocationForm,
  pure,
)(AccountWareHouse);
