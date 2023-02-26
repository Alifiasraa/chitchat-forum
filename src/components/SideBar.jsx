import React from 'react';

function SideBar() {
  return (
    <div className="flex flex-col w-full items-center h-80 border-2 rounded-2xl p-6 m-3 shadow-slate-300 bg-[#f3d2c1]">
      <div className="w-20 h-20 my-2 bg-slate-300 rounded-full">
        <img src="" alt="avatar" />
      </div>
      <h1 className="font-semibold">Kazuha</h1>
      <p>Kazuha@gmail.com</p>
      <button type="button" className="rounded-3xl w-3/4 bg-[#8bd3dd] hover:bg-[#aee9f1] py-2 px-8 my-5 font-semibold">
        Mulai ChitChat
      </button>

    </div>
  );
}

export default SideBar;
