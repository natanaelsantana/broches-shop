import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Resumo from './pages/Resumo';
import Home from '../src/pages/Home';
import ProductDetails from '../src/pages/ProductDetails';
import Cart from '../src/pages/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:_id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element ={<Login />} />
        <Route path="/cadastro" element ={<Cadastro />} />
        <Route path="/resumo" element ={<Resumo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
