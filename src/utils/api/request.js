import axios from 'axios';
import localforage from 'localforage';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function normalizeResponse(response) {
  return response.data;
}

function handleError({ response }) {
  const error = {
    code: response.status,
    message: response.data ? response.data.message : null,
  };
  throw error;
}

export default function request(url, options = { method: 'GET' }) {
  const secureHeaders = {};
  let promise;

  if (options.secure) {
    promise = localforage.getItem('token').then(token => {
      secureHeaders['x-access-token'] = token;
      return token;
    });
  } else {
    promise = Promise.resolve(true);
  }

  return promise
    .then(() =>
      axios({
        method: options.method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...options.headers,
          ...secureHeaders,
        },
        url,
        ...options,
      }),
    )
    .then(checkStatus)
    .then(normalizeResponse)
    .catch(handleError);
}
