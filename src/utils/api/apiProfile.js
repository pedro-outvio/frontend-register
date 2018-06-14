import request from './request';

export const saveProfile = (body, id) =>
  request(`${process.env.APP_API_URL}/user/${id}`, { method: 'PUT', body, secure: true });
