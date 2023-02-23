import React from 'react';
import {
  AiOutlineLike, AiOutlineDislike, AiOutlineComment, AiOutlineClockCircle,
} from 'react-icons/ai';

function ThreadCard() {
  return (
    <div className="flex basis-1/2">
      <div className="min-h-fit border-2 rounded-2xl p-6 m-3 shadow-slate-300 bg-[#f3d2c1]">
        <div className="border rounded-md border-slate-600 max-w-fit px-2">React</div>

        <div className="flex items-center justify-between">
          <div className="my-3 text-xl font-semibold">
            Mari Belajar Bersama Disini!
          </div>
          <div className="flex items-center ml-3">
            <span><AiOutlineClockCircle size={18} /></span>
            <span className="ml-2 text-gray-500 text-sm">2 minutes ago</span>
          </div>
        </div>

        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis excepturi
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis excepturi
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis excepturi
        </div>

        <div className="flex justify-between mt-8">
          <div className="flex gap-4">
            <button type="button">
              <AiOutlineLike size={22} />
            </button>
            <button type="button">
              <AiOutlineDislike size={22} />
            </button>
            <button type="button">
              <AiOutlineComment size={22} />
            </button>
          </div>

          <p>
            Posted by
            {' '}
            <span className="font-semibold">Ajeng</span>
          </p>

        </div>
      </div>
    </div>
  );
}

export default ThreadCard;
