import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';



const URI = "https://broches.onrender.com/api/broches"

const ProductDetails = () => {
  const { _id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${URI}/${_id}`);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [_id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <h1>{product.nome}</h1>
      <p>{product.description}</p>
      <p>Preço: R${product.preco.toFixed(2)}</p>

      <div>
        {product.imagems?.map((image, index) => (
          <img src={image} alt={`${index}`} key={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
