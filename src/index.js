import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './frontend/App';
import 'tailwindcss/tailwind.css';
import store from './frontend/redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);
