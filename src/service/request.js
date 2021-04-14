import axios from 'axios';

const instance = axios.create({
  timeout: 5000,
  headers: {
    'content-Type': 'application/json;charset=UTF-8',
    'x-timestamp': Date.now(),
  },
});
// 跨域是否带Token
instance.defaults.withCredentials = true;

// 拦截请求
instance.interceptors.request.use(
  config => {
    let token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `token ${token}`;
    }
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 拦截响应
instance.interceptors.response.use(
  response => {
    console.log(response);
    return response;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

export default instance;
