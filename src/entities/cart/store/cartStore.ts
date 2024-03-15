import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { defaultCartState } from './defaultState';
import { fetchCartItems } from './thunks/fetchCartItems';

const cartSlice = createSlice({
  name: 'cart',
  initialState: defaultCartState,
  reducers: {
    increaseCartItemAmount: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.map((cartItem) =>
        cartItem.id === action.payload
          ? { ...cartItem, amount: cartItem.amount + 1 }
          : cartItem
      );
    },
    decreaseCartItemAmount: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.map((cartItem) =>
        cartItem.id === action.payload
          ? { ...cartItem, amount: cartItem.amount - 1 }
          : cartItem
      );
    },
    removeCartItem: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
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

export const {
  decreaseCartItemAmount,
  increaseCartItemAmount,
  removeCartItem,
  clearCart,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
