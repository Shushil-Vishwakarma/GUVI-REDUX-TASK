// src/App.js

import React from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import productsData from './products.json'; // Assuming the JSON data is saved as products.json

const App = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Shopping Cart</h1>
      <ProductList products={productsData.products} />
      <Cart />
    </div>
  );
};

export default App;
