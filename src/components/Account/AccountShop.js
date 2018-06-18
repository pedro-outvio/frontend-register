import React from 'react';
import PropTypes from 'prop-types';
import { compose, setDisplayName, pure } from 'recompose';
import { withForm } from 'recompose-extends';
import { Form } from 'semantic-ui-react';

import { InputTypeForm } from '../Common';
import { withLocationForm, withTypeForm } from '../../hoc';

const AccountShop = ({ form, onCompleteField, stepForm }) => (
  <div>
    <Form>
      <InputTypeForm
        label="¿Cuál es la URL de tu tienda?"
        name="url"
        value={form.url}
        placeholder="Introduce la url de tu tienda"
        active={stepForm === 1}
        onCompleted={onCompleteField}
      />

      <InputTypeForm
        label="¿Cuál es el nombre de tu negocio online?"
        name="name"
        value={form.name}
        placeholder="Introduce el nombre de tu tienda"
        active={stepForm === 2}
        onCompleted={onCompleteField}
      />

      <InputTypeForm
        label="¿Cuál es el código postal de tu tienda?"
        name="postcode"
        value={form.postcode}
        placeholder="Introduce el código postal de tu tienda"
        active={stepForm === 3}
        onCompleted={onCompleteField}
      />

      <InputTypeForm
        label="¿Cuál es el país donde está tu tienda?"
        name="country"
        value={form.country}
        placeholder="Introduce el país de tu tienda"
        active={stepForm === 4}
        onCompleted={onCompleteField}
      />

      <InputTypeForm
        label="¿Cuál es la ciudad donde está tu tienda?"
        name="city"
        value={form.city}
        placeholder="Introduce la ciudad de tu tienda"
        active={stepForm === 5}
        onCompleted={onCompleteField}
      />

      <InputTypeForm
        label="¿Cuál es la dirección donde está tu tienda?"
        name="address"
        value={form.address}
        placeholder="Introduce la dirección de tu tienda"
        active={stepForm === 6}
        onCompleted={onCompleteField}
      />

      <InputTypeForm
        label="¿Cuál es el NIF/CIF de tu tienda?"
        name="registrationNumber"
        value={form.registrationNumber}
        placeholder="Introduce el NIF/CIF de tu tienda"
        active={stepForm === 7}
        onCompleted={onCompleteField}
      />

      <InputTypeForm
        label="¿Cuál es el VAT de tu tienda?"
        name="vat"
        value={form.vat}
        placeholder="Introduce el VAT de tu tienda"
        active={stepForm === 8}
        onCompleted={onCompleteField}
      />
    </Form>
  </div>
);

AccountShop.propTypes = {
  form: PropTypes.shape({}).isRequired,
  onCompleteField: PropTypes.func.isRequired,
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
      // saveProfileCompanyAction(form).then(() => nextStep());
      console.log('pasa');
      nextStep();
    },
  ),
  withLocationForm,
  withTypeForm,
  pure,
)(AccountShop);
