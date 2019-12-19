import axios from 'axios';

export const testApi = axios.create({
  baseURL: 'https://testapi.io/api/',
});
