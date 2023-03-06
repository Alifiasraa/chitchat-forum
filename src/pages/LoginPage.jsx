import React from 'react';
import { useDispatch } from 'react-redux';
import LoginInput from '../components/LoginInput';
import chitchat2 from '../images/chitchat2.png';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
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
    <div className="bg-[#f3d2c1] min-h-screen flex">
      <div className="w-1/2 bg-[#fef6e4] flex justify-center items-center">
        <img src={chitchat2} alt="logo" className="mx-auto" />
      </div>
      <LoginInput login={onLogin} />
    </div>
  );
}

export default LoginPage;
