import request from './request';
import queryString from 'query-string';

export default {
  login: data => request.post(`/admin/login`, data),
  admin: data =>
    request.get(`/admin/admin/info?${queryString.stringify(data)}`),
};
