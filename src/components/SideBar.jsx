/* eslint-disable no-redeclare */
import React, { useState } from 'react';

function SideBar(addThread) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [body, setBody] = useState('');

  function addThread() {
    if (body.trim()) {
      addThread({ title, body, category });
      setTitle('');
      setCategory('');
      setBody('');
    }
  }

  function handleTitleChange({ target }) {
    setTitle(target.value);
  }

  function handleCategoryChange({ target }) {
    setCategory(target.value);
  }

  function handleBodyChange({ target }) {
    if (target.value.length <= 320) {
      setBody(target.value);
    }
  }

  return (
    <div className="flex flex-col w-full min-h-min items-center border-2 rounded-2xl p-6 shadow-slate-300 bg-[#f3d2c1]">
      <h1 className="font-semibold text-lg mb-2">My Profile</h1>
      <div className="flex items-center gap-4 border rounded-lg px-8 py-3 border-black ">
        <div className="w-20 h-20 my-2 bg-slate-300 rounded-full">
          <img src="" alt="." />
        </div>
        <div>
          <h1 className="font-semibold">Kazuha</h1>
          <p>Kazuha@gmail.com</p>
        </div>
      </div>

      <h1 className="mt-5 mb-3 font-semibold text-lg">Lets Start The Disscusion!</h1>
      <form onSubmit={addThread} className="mx-5">
        <label htmlFor="title" className="text-left text-[#001858] font-semibold">
          Title
        </label>
        <input
          name="title"
          type="text"
          placeholder="Title"
          className="shadow border rounded w-full mt-2 mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={title}
          onChange={handleTitleChange}
        />
        <label htmlFor="category" className="text-left text-[#001858] font-semibold">
          Category
        </label>
        <input
          name="category"
          type="text"
          placeholder="Email"
          className="shadow border rounded w-full mt-2 mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={category}
          onChange={handleCategoryChange}
        />
        <label htmlFor="message" className="text-left text-[#001858] font-semibold">
          Message
        </label>
        <textarea
          name="message"
          type="text"
          placeholder="Message"
          className="shadow border rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={body}
          onChange={handleBodyChange}
        />

        <div className="flex justify-center">
          <button type="submit" className="rounded-3xl w-3/4 bg-[#8bd3dd] hover:bg-[#aee9f1] py-2 px-8 my-5 font-semibold">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default SideBar;
