/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import useInput from '../hooks/useInput';

function RegisterInput() {
  const [name, setName] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lakukan penanganan submit di sini
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2 bg-transparent px-8 pt-6 pb-8 mb-4 flex flex-col justify-center">
      <div className="mb-4 mx-auto w-full">
        <label htmlFor="email" className="block text-[#001858] font-semibold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={name}
          onChange={setName}
        />
      </div>
      <div className="mb-4 mx-auto w-full">
        <label htmlFor="email" className="block text-[#001858] font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={email}
          onChange={setEmail}
        />
      </div>
      <div className="mb-6 mx-auto w-full">
        <label htmlFor="password" className="block text-[#001858] font-semibold mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="flex items-center justify-between w-full mx-auto">
        <button
          type="submit"
          className="bg-[#fef6e4] text-[#001858] hover:bg-[#ff8ba7] w-1/3 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Register
        </button>

        <p>
          Sudah punya akun?
          {' '}
          <span className="underline hover:text-[#ff8ba7]"><Link to="/login">Login</Link></span>
        </p>
      </div>
    </form>
  );
}

export default RegisterInput;
