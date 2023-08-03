import React from 'react';
import { Link } from 'react-router-dom';

const Confirm = () => {
  return (
    <div>
      <h1>Usuário cadastrado com sucesso</h1>
      <Link to="/login" className="text-red-500">
        Clique aqui para logar na sua conta!
      </Link>
    </div>
  );
};

export default Confirm;
