import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.20.10.6:3333',
});

export default api;
