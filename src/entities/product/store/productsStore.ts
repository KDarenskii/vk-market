import { createSlice } from '@reduxjs/toolkit';

import { fetchProducts } from '..';

import { defaultProductsState } from './defaultState';

const productsSlice = createSlice({
  name: 'products',
  initialState: defaultProductsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.error = null;
        state.isLoading = true;
        state.products = [];
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.error = 'Что-то пошло не так';
        state.isLoading = false;
        state.products = [];
      });
  },
});

export const productsReducer = productsSlice.reducer;
