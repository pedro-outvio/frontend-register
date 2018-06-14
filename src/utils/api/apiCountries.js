import request from './request';

import { normalizeCountries, normalizeCity } from '../normalize';

export const requestCountries = () =>
  request(`https://restcountries.eu/rest/v2/all`).then(normalizeCountries);

export const requestCountryByName = name =>
  request(`https://restcountries.eu/rest/v2/name/${name}`);

export const requestPostCode = (countryCode, postCode) =>
  request(`https://api.zippopotam.us/${countryCode}/${postCode}`);

export const requestCityAndState = (name, postCode) =>
  requestCountryByName(name)
    .then(response => requestPostCode(response[0].alpha2Code, postCode))
    .then(normalizeCity);
