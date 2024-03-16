import axios from 'axios';

export const productsApi = axios.create({
  baseURL: 'https://65e2266ca8583365b317f740.mockapi.io/api',
});
