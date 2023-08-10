import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './frontend/pages/Login';
import Cadastro from './frontend/pages/Cadastro';
import Resumo from './frontend/pages/Resumo';
import Home from '../src/frontend/pages/Home';
import ProductDetails from '../src/frontend/pages/ProductDetails';
import Cart from '../src/frontend/pages/Cart';
import Header from './frontend/components/Header';
import Footer from './frontend/components/Footer';
import Confirm from './frontend/pages/Confirm';
import RecoverPassword from './frontend/pages/RecoverPassword';
import PrivateRoute from './frontend/utils/PrivateRoutes';
import UserSettings from './frontend/pages/UserSettings';

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
            <Route path="/login" element={<Login />} />

            <Route
              path="/settings"
              element={<PrivateRoute element={<UserSettings />} />}
            />
            <Route
              path="/resumo"
              element={
                <PrivateRoute>
                  <Resumo />
                </PrivateRoute>
              }
            />

            <Route path="/recoverPassword" element={<RecoverPassword />} />
            <Route path="/confirmation" element={<Confirm />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
