import React from 'react';
import PropTypes from 'prop-types';
import { compose, setDisplayName, pure } from 'recompose';
import { withForm } from 'recompose-extends';
import { Form, Input, Label, Icon, Popup, Button, Container } from 'semantic-ui-react';

import { CountriesSelect, InputChange } from '../Common';
import { withLocationForm } from '../../hoc';

const AccountShop = ({
  form,
  updateForm,
  updatePostCode,
  updateCountry,
  submitForm,
  formFieldsWithErrors,
}) => (
  <div>
    <Form>
      <Form.Field>
        <label htmlFor="url">
          URL
          <Form.Input
            name="url"
            id="url"
            value={form.url}
            onChange={updateForm}
            placeholder="Enter the url of your shop"
            error={formFieldsWithErrors.includes('url')}
          />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="companyName">
          Company Name
          <Form.Input
            name="name"
            value={form.name}
            onChange={updateForm}
            error={formFieldsWithErrors.includes('name')}
            id="name"
            placeholder="Enter your company name"
          />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="postcode">
          Your store Zip Code
          <InputChange
            name="postcode"
            value={form.postcode}
            onChange={updatePostCode}
            error={formFieldsWithErrors.includes('postcode')}
            id="postcode"
            placeholder="Enter your store zip code"
          />
        </label>
      </Form.Field>

      <Form.Field>
        <label htmlFor="country">
          Your store country
          <CountriesSelect name="country" value={form.country} onChange={updateCountry} />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="city">
          City
          <Form.Input
            name="city"
            value={form.city}
            onChange={updateForm}
            error={formFieldsWithErrors.includes('city')}
            id="city"
            placeholder="Enter your store city"
          />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="address">
          Address
          <Form.Input
            name="address"
            value={form.address}
            onChange={updateForm}
            error={formFieldsWithErrors.includes('address')}
            id="address"
            placeholder="Enter your store address"
          />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="registrationNumber">
          NIF/CIF (company registration number)
          <Form.Input
            name="registrationNumber"
            id="registrationNumber"
            placeholder="Enter your nif/cif"
            error={formFieldsWithErrors.includes('registrationNumber')}
          />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="vat">
          VAT Number
          <Input name="vat" labelPosition="right" id="vat" placeholder="Enter VAT number">
            <input />
            <Label basic>
              <Popup
                trigger={<Icon name="help circle" />}
                content="if you do not provide a valid VAT number we will need to add VAT to your invoice"
              />
            </Label>
          </Input>
        </label>
      </Form.Field>
      <Container textAlign="center">
        <Button positive onClick={submitForm} type="submit">
          Save
        </Button>
      </Container>
    </Form>
  </div>
);

AccountShop.propTypes = {
  form: PropTypes.shape({}).isRequired,
  updateForm: PropTypes.func.isRequired,
  updatePostCode: PropTypes.func.isRequired,
  updateCountry: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  formFieldsWithErrors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default compose(
  setDisplayName('AccountShopComponent'),
  withForm(
    {
      url: { value: '', required: true, pattern: '((xn--)?[a-z0-9]+(-[a-z0-9]+)*\\.)+[a-z]{2,}' },
      name: { value: '', required: true },
      postcode: { value: '', required: true, pattern: '^(0|[1-9][0-9]*)$' },
      city: { value: '', required: true },
      country: { value: '', required: true },
      address: { value: '', required: true },
      registrationNumber: { value: '' },
      vat: { value: '' },
    },
    ({ saveProfileCompanyAction, nextStep }) => form => {
      saveProfileCompanyAction({ company: form }).then(() => nextStep());
    },
  ),
  withLocationForm,
  pure,
)(AccountShop);
