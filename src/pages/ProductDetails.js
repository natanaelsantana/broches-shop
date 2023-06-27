import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';


const URI = process.env.URL;

const ProductDetails = () => {
  const { idUnico } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${URI}/produtos/${idUnico}`);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [idUnico]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: R${product.price.toFixed(2)}</p>

      <div>
        {product.images.map((image, index) => (
          <img src={image} alt={`${index}`} key={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
