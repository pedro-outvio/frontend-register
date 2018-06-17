import React from 'react';
import PropTypes from 'prop-types';
import { compose, setDisplayName, pure, withState, lifecycle } from 'recompose';
import { Dropdown } from 'semantic-ui-react';
import cn from 'classnames';

import { requestCountries } from '../../utils/api';
import styles from './CountriesSelect.scss';

const CountriesSelect = ({ countries, onChange, value, name, error }) => (
  <Dropdown
    placeholder="Select Country"
    fluid
    search
    selection
    options={countries}
    name={name}
    value={value}
    onChange={onChange}
    className={cn({ [styles.error]: error })}
  />
);

CountriesSelect.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({})),
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.bool,
};

CountriesSelect.defaultProps = {
  countries: [],
  onChange: undefined,
  value: null,
  name: null,
  error: false,
};

export default compose(
  setDisplayName('CountriesSelectComponent'),
  withState('countries', 'setCountries', []),
  lifecycle({
    componentDidMount() {
      requestCountries().then(countries => {
        this.props.setCountries(countries);
      });
    },
  }),
  pure,
)(CountriesSelect);
