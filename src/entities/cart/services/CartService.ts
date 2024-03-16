import { AxiosRequest } from 'shared/types';

import { CartItem } from '..';
import { cartApi } from '../api/cartApi';

const ENDPOINT = '/cart';

export class CartService {
  static getCartItems: AxiosRequest<CartItem[]> = async (config) => {
    return cartApi.get(ENDPOINT, config);
  };
}
