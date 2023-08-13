import React, { useState } from 'react';
import Header from '../components/Header';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../redux/cartSlice.js';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const [quantities, setQuantities] = useState(cartItems.map(() => 1)); // Valor padrão é 1 para cada item

  const handleQuantityChange = (index, value) => {
    // Crie um novo array para atualizar a quantidade de um item específico
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);
  };

  const total = cartItems.reduce((acc, item, index) => {
    return acc + item.preco * quantities[index];
  }, 0);

  let items = cartItems.length;

  return (
    <div>
      <Header />

      <div className="bg-gray-100">
        <div className="container mx-auto mt-10">
          <div className="flex shadow-md my-10">
            <div className="w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl"> {items} Items</h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Quantity
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  price
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Total
                </h3>
              </div>

              <div className="flex flex-wrap">
                {cartItems.map((item, index) => (
                  <div
                    key={item._id}
                    className="flex items-center justify-between p-4 border rounded border-gray-200 w-full"
                  >
                    <div className="flex w-2/5 items-center">
                      <img
                        className="w-20 h-20 object-cover object-center rounded border border-gray-200 mr-4"
                        src="https://as1.ftcdn.net/v2/jpg/02/25/61/42/1000_F_225614243_qdF4cO57yfihmCFsx6G24ZxJxa7OuAQb.jpg"
                        alt=""
                      />
                      <span>{item.nome}</span>
                    </div>
                    <div className="w-1/5">
                      <input
                        type="number"
                        min="1"
                        value={quantities[index]}
                        onChange={(e) =>
                          handleQuantityChange(index, e.target.value)
                        }
                        className="w-full text-center border border-gray-200 rounded py-1 px-2"
                      />
                      <button
                        onClick={() => dispatch(removeFromCart(item._id))}
                        className="w-full mt-2 bg-red-500 text-white rounded"
                      >
                        Remove
                      </button>
                    </div>
                    <h3 className="text-center w-1/5">{item.preco}</h3>
                    <h3 className="text-center w-1/5">
                      {item.preco * quantities[index]}
                    </h3>
                  </div>
                ))}
              </div>

              <Link
                to="/"
                className="flex font-semibold text-indigo-600 text-sm mt-10"
              >
                <svg
                  className="fill-current mr-2 text-indigo-600 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </Link>
            </div>

            <div id="summary" className="w-1/4 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>

              <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">
                  Shipping
                </label>
                <select className="block p-2 text-gray-600 w-full text-sm">
                  <option>Standard shipping - $10.00</option>
                </select>
              </div>
              <div className="py-10">
                <label
                  for="promo"
                  className="font-semibold inline-block mb-3 text-sm uppercase"
                >
                  Promo Code
                </label>
                <input
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  className="p-2 text-sm w-full"
                ></input>
              </div>
              <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                Apply
              </button>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>{total}</span>
                </div>
                <Link
                  className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                  to="/resumo"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
