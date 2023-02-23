import React from 'react';
// import { FiSearch } from 'react-icons/fi';

function CommentInput() {
  return (
    <div className="flex gap-1">
      <div className="border border-slate-600 rounded-3xl w-full p-2 ml-3 inline justify-center relative">
        <input
          className="pl-2 w-3/4 focus:outline-none bg-transparent"
          placeholder="Tambahkan komentar"
        />
      </div>

      <button type="button" className="border w-1/5 rounded-3xl mr-3 bg-[#ff8ba7] hover:bg-[#ffc6c7] py-2 px-8 font-semibold text-center">
        Tambahkan
      </button>
    </div>
  );
}

export default CommentInput;
