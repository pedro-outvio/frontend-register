import request from './request';

export const requestLogin = data =>
  request(`${process.env.APP_API_URL}/login`, { method: 'POST', data });

export const requestUser = () =>
  request(`${process.env.APP_API_URL}/current-user`, { method: 'GET', secure: true });
