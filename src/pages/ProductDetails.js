import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductDetails = () => {
  const product = {
    id: 1,
    name: 'Product Name',
    description: 'Product Description',
    price: 99.99,
    images: [
      'https://example.com/image1.jpg',
      'https://example.com/image2.jpg',
      'https://example.com/image3.jpg',
    ],
  };
  return (
    <div>
    <Header />
    <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: R${product.price.toFixed(2)}</p>

      <div>
        {product.images.map((image, index) => (
          <img src={image} alt={`Product Image ${index}`} key={index} />
        ))}
      </div>
    <Footer />
    </div>
  );
};

export default ProductDetails;
