import React from 'react';
import PropTypes from 'prop-types';
import { compose, setDisplayName, pure } from 'recompose';
import { Form, Card, Icon } from 'semantic-ui-react';
import { withForm } from 'recompose-extends';

import { InputTypeForm } from '../Common';
import { withLocationForm, withTypeForm } from '../../hoc';

const AccountWareHouse = ({ form, warehouses, stepForm, onCompleteField }) => (
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
        <InputTypeForm
          name="name"
          label="Ponle un nombre a tu almacen"
          value={form.name}
          placeholder="Introduce el alias del almacen"
          active={stepForm === 1}
          onCompleted={onCompleteField}
        />
        <InputTypeForm
          name="postcode"
          label="¿Cuál es el código postal de tu almacen?"
          value={form.postcode}
          placeholder="Introduce el código postal de tu almacen"
          active={stepForm === 2}
          onCompleted={onCompleteField}
        />
        <InputTypeForm
          name="country"
          label="¿Cuál es el país de tu almacen?"
          value={form.country}
          placeholder="Introduce el país de tu almacen"
          active={stepForm === 3}
          onCompleted={onCompleteField}
        />
        <InputTypeForm
          name="city"
          label="¿Cuál es la ciudad de tu almacen?"
          value={form.country}
          placeholder="Introduce la ciudad de tu almacen"
          active={stepForm === 4}
          onCompleted={onCompleteField}
        />
        <InputTypeForm
          name="address"
          label="¿Cuál es la dirección de tu almacen?"
          value={form.address}
          placeholder="Introduce la dirección de tu almacen"
          active={stepForm === 5}
          onCompleted={onCompleteField}
        />
        <InputTypeForm
          name="contactName"
          label="Dinos el nombre del contacto de tu almacen"
          value={form.contactName}
          placeholder="Introduce el nombre del contacto de tu almacen"
          active={stepForm === 6}
          onCompleted={onCompleteField}
        />

        <InputTypeForm
          name="contactPhone"
          label="Dinos el teléfono del contacto de tu almacen"
          value={form.contactPhone}
          placeholder="Introduce el teléfono del contacto de tu almacen"
          active={stepForm === 7}
          onCompleted={onCompleteField}
        />
      </Form>
    )}
  </div>
);

AccountWareHouse.propTypes = {
  form: PropTypes.shape({}).isRequired,
  warehouses: PropTypes.arrayOf(PropTypes.shape({})),
  stepForm: PropTypes.number.isRequired,
  onCompleteField: PropTypes.func.isRequired,
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
      // saveProfileWareHouseAction(form);
    },
  ),
  withLocationForm,
  withTypeForm,
  pure,
)(AccountWareHouse);
