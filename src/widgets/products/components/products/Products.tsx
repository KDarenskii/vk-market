import { FC } from 'react';

import { ProductsHeader } from 'features/product';

import { Container } from 'shared/components';

import {
  Group,
  PanelSpinner,
  Separator,
  Spacing,
  SplitCol,
} from '@vkontakte/vkui';

import { ProductsList } from '../productsList';

import styles from './products.module.css';

const data = [
  {
    id: 1,
    title: 'Foldsack Backpack',
    price: 109.95,
    description: 'Your perfect pack for everyday use',
    category: "men's clothing",
    image: 'https://cdn.dummyjson.com/product-images/59/thumbnail.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,
    description: 'Slim-fitting style, contrast raglan long sleeve',
    category: "men's clothing",
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    price: 55.99,
    description: 'Great outerwear jackets for Spring/Autumn/Winter',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: 'Mens Casual Slim Fit',
    price: 15.99,
    description: 'The color could be slightly different',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title: 'Silver Dragon Chain Bracelet',
    price: 695,
    description: 'The Naga was inspired by mythical water dragon',
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: 'Solid Gold Petite Micropave',
    price: 168,
    description: 'Designed by Hafeez in the United States',
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: 'White Gold Plated Princess',
    price: 9.99,
    description: 'Classic Wedding Diamond Ring',
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    title: 'Pierced Owl Rose Steel',
    price: 10.99,
    description: 'Rose Gold Plated Double',
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 9,
    title: 'Portable Hard Drive - USB 3.0',
    price: 64,
    description: 'USB 3.0 and USB 2.0 Compatibility data transfers',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
  {
    id: 10,
    title: 'SanDisk SSD PLUS 1TB Internal SSD',
    price: 109,
    description: 'Easy upgrade for faster boot up application',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 11,
    title: 'Silicon Power 256GB SSD',
    price: 109,
    description: 'NAND flash delivers high transfer speeds',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
  {
    id: 12,
    title: 'WD 4TB Gaming Drive',
    price: 114,
    description: 'Expand your PS4 gaming experience',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
  {
    id: 13,
    title: 'Acer SB220Q bi 21.5',
    price: 599,
    description: '21. 5 inches widescreen IPS display',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
    rating: {
      rate: 2.9,
      count: 250,
    },
  },
  {
    id: 14,
    title: 'Samsung 49-Inch CHG90',
    price: 999.99,
    description: '49 INCH SUPER ULTRAWIDE GAMING MONITOR',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
    rating: {
      rate: 2.2,
      count: 140,
    },
  },
  {
    id: 15,
    title: 'Snowboard Jacket Winter Coats',
    price: 56.99,
    description: 'The Jackets is US standard size',
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
    rating: {
      rate: 2.6,
      count: 235,
    },
  },
  {
    id: 16,
    title: 'Removable Leather Moto Biker Jacket',
    price: 29.95,
    description: 'Faux leather material for style and comfort',
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
    rating: {
      rate: 2.9,
      count: 340,
    },
  },
  {
    id: 17,
    title: 'Rain Jacket Striped Raincoats',
    price: 39.99,
    description: 'Lightweight perfect for trip or casual wear',
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
    rating: {
      rate: 3.8,
      count: 679,
    },
  },
  {
    id: 18,
    title: "MBJ Women's Sleeve Boat Neck ",
    price: 9.85,
    description: 'Made in USA or Imported',
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve",
    price: 7.95,
    description: '100% Polyester, Machine wash',
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
    rating: {
      rate: 4.5,
      count: 146,
    },
  },
  {
    id: 20,
    title: 'Women T Shirt Cotton Short',
    price: 12.99,
    description: 'Features: Casual, Short Sleeve',
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
];

export const Products: FC = () => {
  return (
    <Container>
      <SplitCol
        width="100%"
        stretchedOnMobile
        className={styles.productsWrapper}
      >
        <Group>
          <ProductsHeader />
          <Spacing size={16} />
          <Separator />
          <Spacing size={16} />
          <ProductsList products={data} />
          {/* {isLoading && <PanelSpinner>Список товаров загружается</PanelSpinner>} */}
          {/* {!isLoading && cartItems.length === 0 && <CartEmptyPlaceholder />} */}
          {/* {!isLoading && cartItems.length > 0 && (
          <>
            <CartList cartItems={cartItems} />
            <Spacing size={16} />
            <Separator />
            <CartTotalPrice />
          </>
        )} */}
        </Group>
      </SplitCol>
    </Container>
  );
};
