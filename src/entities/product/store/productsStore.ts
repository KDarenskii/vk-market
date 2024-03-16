import { createSlice } from '@reduxjs/toolkit';

import { defaultProductsState } from './defaultState';

const productsSlice = createSlice({
  name: 'products',
  initialState: defaultProductsState,
  reducers: {},
});
