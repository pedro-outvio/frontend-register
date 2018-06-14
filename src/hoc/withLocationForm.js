import { compose, withHandlers } from 'recompose';

import { requestCityAndState } from '../utils/api';

const withLocationForm = compose(
  withHandlers({
    getCityAndState: ({ updateField }) => (country, postCode) => {
      if (country && postCode) {
        requestCityAndState(country, postCode).then(response => {
          Object.keys(response).map(i => {
            updateField(i, response[i]);
            return i;
          });
        });
      }
    },
  }),
  withHandlers({
    updateCountry: ({ updateField, getCityAndState, form }) => (event, data) => {
      updateField(data.name, data.value);
      getCityAndState(data.value, form.postcode);
    },
    updatePostCode: ({ updateField, form, getCityAndState }) => (name, value) => {
      getCityAndState(form.country, value);
      updateField(name, value);
    },
  }),
);

export default withLocationForm;
