import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosRequestConfig } from 'axios';

import { Product, ProductsService } from 'entities/product';

import { isCancelError } from 'shared/helpers';

export const fetchProducts = createAsyncThunk<
  Product[],
  AxiosRequestConfig | undefined
>('products/fetchProducts', async function (config, { rejectWithValue }) {
  try {
    const response = await ProductsService.getProducts(config);
    return response.data;
  } catch (error) {
    if (isCancelError(error)) {
      return rejectWithValue('canceled');
    } else {
      return rejectWithValue('Something went wrong');
    }
  }
});
