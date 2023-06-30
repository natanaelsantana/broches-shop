import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-4 px-8 text-white text-center">
      <p>
        Todos os direitos reservados © natanaelsantana;{' '}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
