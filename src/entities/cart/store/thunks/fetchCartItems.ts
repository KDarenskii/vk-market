import { createAsyncThunk } from '@reduxjs/toolkit';
import { CartItem, CartService } from 'entities/cart';

export const fetchCartItems = createAsyncThunk<CartItem[]>(
  'bookmarks/fetchBookmarks',
  async function () {
    const response = await CartService.getCartItems();
    return response.data;
  }
);
