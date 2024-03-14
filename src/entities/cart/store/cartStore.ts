import { createSlice } from '@reduxjs/toolkit';

import { defaultCartState } from './defaultState';

const cartSlice = createSlice({
  name: 'cart',
  initialState: defaultCartState,
  reducers: {},
});

export const cartReducer = cartSlice.reducer;
