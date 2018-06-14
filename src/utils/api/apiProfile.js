import request from './request';

export const saveProfile = (data, id) =>
  request(`${process.env.APP_API_URL}/user/${id}`, { method: 'PUT', data, secure: true });

export const saveCompanyProfile = (data, id) =>
  request(`${process.env.APP_API_URL}/store-settings/${id}`, { method: 'PUT', data, secure: true });
