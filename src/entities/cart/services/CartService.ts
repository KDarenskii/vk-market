import { AxiosRequest } from 'shared/types';

import { CartItem } from '..';
import { cartApi } from '../api/cartApi';

export class CartService {
  static getCartItems: AxiosRequest<CartItem[]> = async (config) => {
    return cartApi.get('/cart', config);
  };
}
