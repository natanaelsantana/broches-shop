import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../config/cartSlice';

const persistedCart = localStorage.getItem('cart');
const preloadedState = persistedCart ? { cart: JSON.parse(persistedCart) } : {};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState, // Configura o estado inicial do carrinho com o valor do localStorage
});

export default store;
