import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';
import chitchat2 from '../images/chitchat2.png';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
    navigate('/');
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
