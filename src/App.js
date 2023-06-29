import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Resumo from './pages/Resumo';
import Home from '../src/pages/Home';
import ProductDetails from '../src/pages/ProductDetails';
import Cart from '../src/pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <BrowserRouter>
    <Header />

    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:_id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element ={<Login />} />
        <Route path="/cadastro" element ={<Cadastro />} />
        <Route path="/resumo" element ={<Resumo />} />
      </Routes>
      </main>
    <Footer />
    </BrowserRouter>
    </div>
  );
};

export default App;
