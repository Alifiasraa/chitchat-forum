import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import chitchat from '../images/chitchat.png';
import { asyncUnsetAuthUser } from '../states/authUser/action';

function Navigation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(asyncUnsetAuthUser());
    navigate('/login');
  };

  return (
    <div className="relative">
      <div className="sticky top-0 flex justify-center gap-10 py-3">
        <span className="flex items-center">
          <img className="h-7" src={chitchat} alt="font chitchat" />
        </span>
        <div className=" border border-slate-600 rounded-3xl p-2 mx-8 w-1/2 inline justify-center relative">
          <input
            className="w-full pl-2 focus:outline-none bg-transparent"
            placeholder="Type anything here..."
          />
          <div className="border rounded-full w-8 h-8 bg-[#ff8ba7]  absolute right-2 top-1 py-[2px] px-[4px] flex">
            <button type="button" className="m-auto">
              <FiSearch />
            </button>
          </div>
        </div>

        <button type="button" onClick={onLogout} className="border rounded-3xl bg-[#ff8ba7] hover:bg-[#ffc6c7] py-2 px-8 font-semibold">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navigation;
