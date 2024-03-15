import { createSlice } from '@reduxjs/toolkit';

import { defaultCartState } from './defaultState';
import { fetchCartItems } from './thunks/fetchCartItems';

const cartSlice = createSlice({
  name: 'cart',
  initialState: defaultCartState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.error = null;
        state.isLoading = true;
        state.cartItems = [];
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state) => {
        state.error = 'Что-то пошло не так';
        state.isLoading = false;
        state.cartItems = [];
      });
  },
});

export const cartReducer = cartSlice.reducer;
