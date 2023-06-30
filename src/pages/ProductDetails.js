import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

const URI = 'https://broches.onrender.com/api/broches';

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
      <div className="flex flex-row flex-grow">
        <div className="w-1/2">
          {product.imagems?.map((image, index) => (
            <img
              className="w-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              src={image}
              alt={`${index}`}
              key={index}
            />
          ))}
        </div>
        <div className="w-1/2 flex flex-col justify-center px-8">
          <h1 className="text-4xl font-bold text-gray-800"> {product.nome}</h1>
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-gray-800">
            Preço: R${product.preco.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
