import React from 'react';
import PropTypes from 'prop-types';
import { compose, setDisplayName, pure } from 'recompose';
import { withForm } from 'recompose-extends';
import { Form, Input, Label, Icon, Popup, Button, Container } from 'semantic-ui-react';

import { CountriesSelect, InputChange, InputTypeForm } from '../Common';
import { withLocationForm, withTypeForm } from '../../hoc';

const AccountShop = ({
  form,
  updateForm,
  updatePostCode,
  updateCountry,
  submitForm,
  formFieldsWithErrors,
  stepForm,
}) => (
  <div>
    <Form>
      <InputTypeForm
        label="Cual es la URL de tu tienda?"
        name="url"
        value={form.url}
        placeholder="Introduce la url de tu tienda"
        active={stepForm === 1}
      />

      <InputTypeForm
        label="Cual es el nombre de tu negocio online?"
        name="name"
        value={form.name}
        placeholder="Introduce el nombre de tu tienda"
        active={stepForm === 2}
      />
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
          <CountriesSelect
            name="country"
            value={form.country}
            onChange={updateCountry}
            error={formFieldsWithErrors.includes('country')}
          />
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
          Save and Continue
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
  stepForm: PropTypes.number.isRequired,
};

export default compose(
  setDisplayName('AccountShopComponent'),
  withForm(
    ({ company }) => ({
      url: {
        value: company.url,
        required: true,
        pattern: '((xn--)?[a-z0-9]+(-[a-z0-9]+)*\\.)+[a-z]{2,}',
      },
      name: { value: company.name, required: true },
      postcode: { value: company.postcode, required: true, pattern: '^(0|[1-9][0-9]*)$' },
      city: { value: company.city, required: true },
      country: { value: company.country, required: true },
      address: { value: company.address, required: true },
      registrationNumber: { value: company.registrationNumber },
      vat: { value: company.vat },
    }),
    ({ saveProfileCompanyAction, nextStep }) => form => {
      saveProfileCompanyAction(form).then(() => nextStep());
    },
  ),
  withLocationForm,
  withTypeForm,
  pure,
)(AccountShop);
