import React from 'react';
import PropTypes from 'prop-types';
import { compose, setDisplayName, pure, withState, lifecycle } from 'recompose';
import { Dropdown } from 'semantic-ui-react';

import { requestCountries } from '../../utils/api';

const CountriesSelect = ({ countries, onChange, value, name }) => (
  <Dropdown
    placeholder="Select Country"
    fluid
    search
    selection
    options={countries}
    name={name}
    value={value}
    onChange={onChange}
  />
);

CountriesSelect.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({})),
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
};

CountriesSelect.defaultProps = {
  countries: [],
  onChange: undefined,
  value: null,
  name: null,
};

export default compose(
  setDisplayName('CountriesSelectComponent'),
  withState('countries', 'setCountries', []),
  lifecycle({
    componentDidMount() {
      requestCountries().then(countries => this.props.setCountries(countries));
    },
  }),
  pure,
)(CountriesSelect);
