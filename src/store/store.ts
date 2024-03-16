import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { cartReducer } from 'entities/cart';
import { productsReducer } from 'entities/product';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
