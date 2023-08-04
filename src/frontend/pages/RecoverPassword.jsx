import React from 'react';

const RecoverPassword = () => {
  return (
    <div>
      <form>
        <div className="mb-6">
          <label className="font-sans block mb-2 font-bold" for="">
            Insert the email you used to sign up!
          </label>
          <input
            className="inline-block w-full p-4 leading-6 text-lg font-normal bg-white shadow border-2 border-gray-400 rounded"
            type="email"
            placeholder="Example@example.com"
          ></input>
        </div>
        <button
          type="submit"
          className="inline-block w-full py-4 px-6 mb-6 text-center text-lg text-white leading-6 font-medium bg-gray-800 hover:bg-gray-100 border-3 hover:text-black shadow rounded transition duration-700"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default RecoverPassword;
