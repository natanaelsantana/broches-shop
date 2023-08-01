import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

/*LocalStorage turn desnecessary with router usage */

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      // localStorage.setItem('cart', JSON.stringify(state)); // Salva o estado no localStorage
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload,
      );
      //  localStorage.setItem('cart', JSON.stringify(state)); // Atualiza o estado no localStorage após a remoção
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
