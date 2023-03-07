import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import chitchat2 from '../images/chitchat2.png';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
  };

  return (
    <div className="bg-[#f3d2c1] min-h-screen flex">
      <div className="w-1/2 bg-[#fef6e4] flex justify-center items-center">
        <img src={chitchat2} alt="logo" className="mx-auto" />
      </div>
      <RegisterInput register={onRegister} />
    </div>
  );
}

export default RegisterPage;
