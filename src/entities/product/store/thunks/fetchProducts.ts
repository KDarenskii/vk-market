import { createAsyncThunk } from '@reduxjs/toolkit';

import { ProductsService } from 'entities/product';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async function () {
    const response = await ProductsService.getProducts();
    return response.data;
  }
);
