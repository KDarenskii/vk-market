import { AxiosRequest } from 'shared/types';

import { Product } from '..';
import { productsApi } from '../api/productsApi';

const ENDPOINT = '/products';

export class ProductsService {
  static getProducts: AxiosRequest<Product[]> = async (config) => {
    return productsApi.get(ENDPOINT, config);
  };
}
