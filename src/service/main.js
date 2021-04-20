import request from './request';
import queryString from 'query-string';

const service = {
  login: data => request.post(`/admin/login`, data),
  admin: data =>
    request.get(`/admin/admin/info?${queryString.stringify(data)}`),
};

export default service;
