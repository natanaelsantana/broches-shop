import React from 'react';
import Header from '../components/Header';

//Principal components
import Products from '../components/ProductList';

const Home = () => {
  return (
    <div>
      <Header />
      <Products />
    </div>
  );
};

export default Home;
