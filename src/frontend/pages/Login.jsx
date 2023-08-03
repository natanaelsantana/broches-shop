import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = {
        email,
        password,
      };

      const response = await axios.post(
        'http://localhost:3001/api/auth/login',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      setMessage(response.data.message);
      navigate('/');
    } catch {
      setMessage('Error: Credencials invalid');
    }
  };

  return (
    <div>
      <section className="py-26 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-lg mx-auto py-8">
            <div className="text-center mb-8">
              <h2 className="font-serif antialised text-3xl md:text-4xl mb-2">
                Sign in
              </h2>
            </div>
            <form action="post" onSubmit={handleLogin}>
              {/*Campo de verificação de email*/}
              <div className="mb-6">
                <label className="font-sans block mb-2 font-bold" for="">
                  Email
                </label>
                <input
                  className="inline-block w-full p-4 leading-6 text-lg font-normal bg-white shadow border-2 border-gray-400 rounded"
                  type="email"
                  placeholder="Example@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="**********"
                ></input>
              </div>

              <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
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

                <div className="w-full lg:w-auto px-4">
                  <a
                    className="inline-block font-semibold hover:underline"
                    href="/"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className="inline-block w-full py-4 px-6 mb-6 text-center text-lg text-white leading-6 font-medium bg-gray-800 hover:bg-gray-100 border-3 hover:text-black shadow rounded transition duration-700"
              >
                Sign in
              </button>
              <p className="text-center font-medium">
                Don&rsquo;t have an account?{' '}
                <a className="text-red-500 hover:underline" href="/Cadastro">
                  Sign up
                </a>
              </p>
            </form>
            {message && <p>{message}</p>}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
