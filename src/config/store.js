// store.js
import { createStore, combineReducers } from 'redux';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  // Outros reducers podem ser adicionados aqui, se necessário
});

const store = createStore(rootReducer);

export default store;
