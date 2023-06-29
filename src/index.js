import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.render(
  <ProductsProvider>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </ProductsProvider>,
  document.getElementById("root")
);

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <ProductsProvider>
//     <App />
//   </ProductsProvider>
// );
// https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/23684294#overview
// add to cart