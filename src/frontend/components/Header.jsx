import React from 'react';
import { Link } from 'react-router-dom';
import DropDown from '../components/HeaderDropDown';

const Header = () => {
  return (
    <header className="shadow-md rounded z-30">
      <nav id="header" className="flex w-full z-30 top-0 py-1">
        <div className="w-full container mx-auto flex items-center justify-between mt-0 px-6 py-3">
          <div className="order-2 md:order-1">
            <Link
              className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
              to="/"
            >
              Casa dos Broches
            </Link>
          </div>

          <div className="order-3 md:order-2 flex items-center justify-center">
            <input
              type="text"
              placeholder="Pesquisar"
              className="rounded-full border border-gray-300 py-1 px-3 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div
            className="order-1 md:order-3 flex items-center"
            id="nav-content"
          >
            <DropDown />

            <Link
              className="pl-3 inline-block no-underline hover:text-black"
              to="/cart"
            >
              <svg
                className="fill-current hover:text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                <circle cx="10.5" cy="18.5" r="1.5" />
                <circle cx="17.5" cy="18.5" r="1.5" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
