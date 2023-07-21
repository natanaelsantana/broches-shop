import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Resumo from './pages/Resumo';
import Home from '../src/pages/Home';
import ProductDetails from '../src/pages/ProductDetails';
import Cart from '../src/pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <CartProvider>
        <BrowserRouter>
          <Header />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:_id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/resumo" element={<Resumo />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
};

export default App;
