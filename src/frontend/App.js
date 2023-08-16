import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Cadastro';
import Checkout from './pages/Resumo';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Confirm from './pages/Confirm';
import RecoverPassword from './pages/RecoverPassword';
import PrivateRoute from './utils/PrivateRoutes';
import UserSettings from './pages/UserSettings';
import Logout from './pages/Logout';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:_id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />

            <Route
              path="/settings"
              element={<PrivateRoute element={<UserSettings />} />}
            />
            <Route
              path="/checkout"
              element={<PrivateRoute element={<Checkout />} />}
            />

            <Route
              path="/logout"
              element={<PrivateRoute element={<Logout />} />}
            />

            <Route path="/recoverPassword" element={<RecoverPassword />} />
            <Route path="/confirmation" element={<Confirm />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
