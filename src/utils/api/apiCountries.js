import localforage from 'localforage';

import request from './request';
import { normalizeCountries, normalizeCity } from '../normalize';

export const requestCountries = () =>
  new Promise(resolve => {
    localforage.getItem('countries').then(countries => {
      if (countries) {
        resolve(countries);
      } else {
        request(`https://restcountries.eu/rest/v2/all`).then(data =>
          localforage.setItem('countries', normalizeCountries(data)).then(items => resolve(items)),
        );
      }
    });
  });

export const requestCountryByName = name =>
  request(`https://restcountries.eu/rest/v2/name/${name}`);

export const requestPostCode = (countryCode, postCode) =>
  request(`https://api.zippopotam.us/${countryCode}/${postCode}`);

export const requestCityAndState = (name, postCode) =>
  requestCountryByName(name)
    .then(response => requestPostCode(response[0].alpha2Code, postCode))
    .then(normalizeCity);

export const getCountry = countryName =>
  localforage
    .getItem('countries')
    .then(countries => countries.find(item => item.text === countryName));
