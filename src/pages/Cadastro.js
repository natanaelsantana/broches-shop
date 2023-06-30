import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cadastro = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(e.target.value === password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      <p>Senhas não coincidem</p>;
    }
  };

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <section className="py-26 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-lg mx-auto py-8">
            <div className="text-center mb-8">
              <h2 className="font-serif antialised text-3xl md:text-4xl mb-2">
                Create your account!
              </h2>
            </div>
            <form action="" onSubmit={handleSubmit}>
              {/*Campo de verificação de email*/}
              <div className="mb-6">
                <label
                  className="font-sans block mb-2 font-bold"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="inline-block w-full p-4 leading-6 text-lg font-normal bg-white shadow border-2 border-gray-400 rounded"
                  type="email"
                  placeholder="Example@example.com"
                ></input>
              </div>

              <div className="mb-6">
                <label
                  className="font-sans block mb-2 font-bold"
                  htmlFor="name"
                >
                  How do you want to be called?
                </label>
                <input
                  className="inline-block w-full p-4 leading-6 text-lg font-normal bg-white shadow border-2 border-gray-400 rounded"
                  type="text"
                  placeholder="Your name"
                ></input>
              </div>

              {/*Campo de verificação de senha*/}
              <div className="mb-6">
                <label
                  className="font-sans block mb-2 font-bold"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="inline-block w-full p-4 leading-6 text-lg inline-block w-full p-4 leading-6 text-lg font-normal bg-white shadow border-2 border-gray-400 rounded"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="**********"
                ></input>
              </div>

              <div className="mb-6">
                <label
                  className="font-sans block mb-2 font-bold"
                  htmlFor="confirmPassword"
                >
                  Confirm your Password
                </label>
                <input
                  className="inline-block w-full p-4 leading-6 text-lg inline-block w-full p-4 leading-6 text-lg font-normal bg-white shadow border-2 border-gray-400 rounded"
                  type={showPassword ? 'text' : 'password'}
                  id="password-confirmation"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  placeholder="**********"
                ></input>
                {!passwordMatch && (
                  <p className="text-red-500 font-medium">
                    Passwords doesn't match
                  </p>
                )}
              </div>

              <div className="flex flex-wrap -mx-4 mb-6 items-center justify-start">
                {/* Input to show password */}
                <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                  <label htmlFor="showPassword">
                    <input
                      type="checkbox"
                      id="showPassword"
                      checked={showPassword}
                      onChange={handleToggleShowPassword}
                    />
                    <span className="ml-1 font-semibold">Show password</span>
                  </label>
                </div>

                <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                  <label htmlFor="">
                    <input type="checkbox"></input>
                    <span className="ml-1 font-semibold">Remember me</span>
                  </label>
                </div>
              </div>

              <Link to="/">
                <button
                  type="submit"
                  className="inline-block w-full py-4 px-6 mb-6 text-center text-lg text-white leading-6 font-medium bg-gray-800 hover:bg-gray-100 border-3 hover:text-black shadow rounded transition duration-700"
                >
                  Register!
                </button>
              </Link>

              <div className="w-full lg:w-auto px-4 justify-center">
                <a
                  className="inline-block font-semibold hover:underline"
                  href="/"
                >
                  Forgot your password? Not a problem!
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cadastro;
