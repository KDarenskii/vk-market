import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosRequestConfig } from 'axios';

import { CartItem, CartService } from 'entities/cart';

import { isCancelError } from 'shared/helpers';

export const fetchCartItems = createAsyncThunk<
  CartItem[],
  AxiosRequestConfig | undefined
>('bookmarks/fetchBookmarks', async function (config, { rejectWithValue }) {
  try {
    const response = await CartService.getCartItems(config);
    return response.data;
  } catch (error) {
    if (isCancelError(error)) {
      return rejectWithValue('canceled');
    } else {
      return rejectWithValue('Something went wrong');
    }
  }
});
