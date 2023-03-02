import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginInput() {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

  const dispatch = useDispatch();

  const onLogin = (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert('Email dan password wajib diisi');
      return;
    }
    if (email.length < 6 || email.length > 100) {
      alert('Email harus lebih dari 6 karakter dan kurang dari 100 karakter');
      return;
    }
    if (password.length < 5 || password.length > 20) {
      alert('Password harus lebih dari 5 karakter dan kurang dari 20 karakter');
      return;
    }
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <form onSubmit={onLogin} className="w-1/2 bg-transparent px-8 pt-6 pb-8 mb-4 flex flex-col justify-center">
      <div className="mb-4 mx-auto w-full">
        <label htmlFor="email" className="block text-[#001858] font-semibold mb-2">
          Email
        </label>
        <input
          name="email"
          type="email"
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
          name="password"
          type="password"
          placeholder="Password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={password}
          onChange={setPassword}
        />
      </div>

      <div className="flex items-center justify-between w-full mx-auto">
        <button
          type="submit"
          className="bg-[#fef6e4] text-[#001858] hover:bg-[#ff8ba7] w-1/3 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </button>

        <p>
          Belum punya akun?
          {' '}
          <span className="underline hover:text-[#ff8ba7]"><Link to="/register">Register</Link></span>
        </p>
      </div>
    </form>
  );
}

export default LoginInput;
