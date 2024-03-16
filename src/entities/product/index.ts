export type { Product } from './types/product';
export { ProductCardRating } from './components/productCardRating';
export { productsApi } from './api/productsApi';
export { ProductsService } from './services/ProductsService';
export { selectProductsState } from './store/selectors/selectProductsState';
export { fetchProducts } from './store/thunks/fetchProducts';
export { productsReducer } from './store/productsStore.ts';
