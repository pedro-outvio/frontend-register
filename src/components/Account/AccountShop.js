import React from 'react';
import PropTypes from 'prop-types';
import { compose, setDisplayName, pure } from 'recompose';
import { withForm } from 'recompose-extends';
import { Form, Input, Label, Icon, Popup, Button, Container } from 'semantic-ui-react';

import { CountriesSelect } from '../Common';

const AccountShop = ({ form, updateForm, updateField, submitForm, formFieldsWithErrors }) => (
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
            name="companyName"
            value={form.url}
            onChange={updateForm}
            error={formFieldsWithErrors.includes('companyName')}
            id="companyName"
            placeholder="Enter your company name"
          />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="postcode">
          Your store Zip Code
          <Form.Input
            name="postcode"
            value={form.postcode}
            onChange={updateForm}
            error={formFieldsWithErrors.includes('postcode')}
            id="postcode"
            placeholder="Enter your store zip code"
          />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="country">
          Your store country
          <CountriesSelect name="country" value={form.country} onChange={updateField} />
        </label>
      </Form.Field>
      <Form.Field>
        <label htmlFor="nif">
          NIF/CIF (company registration number)
          <Form.Input
            name="nif"
            id="nif"
            placeholder="Enter your nif/cif"
            error={formFieldsWithErrors.includes('nif')}
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
  updateField: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  formFieldsWithErrors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default compose(
  setDisplayName('AccountShopComponent'),
  withForm({
    url: { value: '', required: true, pattern: '((xn--)?[a-z0-9]+(-[a-z0-9]+)*\\.)+[a-z]{2,}' },
    companyName: { value: '', required: true },
    postcode: { value: '', required: true },
    city: { value: '', required: true },
    country: { value: '', required: true },
    address: { value: '', required: true },
    nif: { value: '' },
    vat: { value: '' },
  }),
  pure,
)(AccountShop);
