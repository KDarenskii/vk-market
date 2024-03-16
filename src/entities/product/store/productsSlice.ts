import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchProducts } from '..';

import { defaultProductsState } from './defaultState';

const productsSlice = createSlice({
  name: 'products',
  initialState: defaultProductsState,
  reducers: {
    setProductsQuery: (state, action: PayloadAction<string | null>) => {
      state.query = action.payload;
    },
  },
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
      .addCase(fetchProducts.rejected, (state, action) => {
        if (action.payload !== 'canceled') {
          state.error = 'Что-то пошло не так';
          state.isLoading = false;
          state.products = [];
        }
      });
  },
});

export const { setProductsQuery } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
