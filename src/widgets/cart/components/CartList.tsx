import { FC } from 'react';

import { Product } from 'entities/product';

import { CartProduct } from './CartProduct';

const data: Product[] = [
  {
    id: 1,
    title: 'Fjallraven - Backpack',
    price: 109.95,
    description: 'Your perfect pack for everyday use and walks in the forest',
    imageUrl: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,
    description: 'Slim-fitting style, contrast raglan long sleeve',
    imageUrl:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    price: 55.99,
    description: 'Great outerwear jackets for camping, climbing',
    imageUrl: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
  },
];

export const CartList: FC = () => {
  return (
    <>
      {data.map((product) => (
        <CartProduct key={product.id} product={product} />
      ))}
    </>
  );
};
