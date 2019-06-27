import axiosFactory from '../../../lib/axios';

export const requestGetUsers = () => {
  const axios = axiosFactory.createInstance(process.env.REACT_APP_API_URL);
  return axios.get('/users').then(response => response.data);
};

export const requestCreateUser = payload => {
  const axios = axiosFactory.createInstance(process.env.REACT_APP_API_URL);
  return axios.post('/users', payload).then(response => response.data);
};

export const requestGetUser = userId => {
  const axios = axiosFactory.createInstance(process.env.REACT_APP_API_URL);
  return axios.get(`/users/${userId}`).then(response => response.data);
};

export const requestUpdateUser = (userId, payload) => {
  const axios = axiosFactory.createInstance(process.env.REACT_APP_API_URL);
  return axios.put(`/users/${userId}`, payload).then(response => response.data);
};

export const requestDeleteUser = userId => {
  const axios = axiosFactory.createInstance(process.env.REACT_APP_API_URL);
  return axios.delete(`/users/${userId}`).then(response => response.data);
};
