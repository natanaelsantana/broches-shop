import { Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = ({ children }) => {
  const cookie = Cookies.get('jwt');

  const isAuthenticated = false;

  if (isAuthenticated) {
    return children;
  } else {
    console.log(cookie);
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
