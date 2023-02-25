import React from 'react';
import {
  AiOutlineLike, AiOutlineDislike, AiOutlineComment, AiOutlineClockCircle,
} from 'react-icons/ai';
import postedAt from '../utils';

function ThreadCard({
  title, body, category, createdAt, upvote, downvote, totalComments,
}) {
  return (
    <div className="flex basis-1/2">
      <div className="min-h-fit w-full border-2 rounded-2xl p-6 m-3 shadow-slate-300 bg-[#f3d2c1]">
        <div className="border rounded-md border-slate-600 max-w-fit px-2">{category}</div>

        <div className="flex items-center justify-between">
          <div className="my-3 text-xl font-semibold">
            {title}
          </div>
          <div className="flex items-center ml-3">
            <span><AiOutlineClockCircle size={18} /></span>
            <span className="ml-2 text-black text-sm">{postedAt(createdAt)}</span>
          </div>
        </div>

        <div>
          {body}
        </div>

        <div className="flex justify-between mt-8">
          <div className="flex gap-2">
            <button type="button">
              <AiOutlineLike size={22} />
            </button>
            {' '}
            <span>{upvote}</span>

            <button type="button">
              <AiOutlineDislike size={22} />
            </button>
            <span>{downvote}</span>

            <button type="button">
              <AiOutlineComment size={22} />
            </button>
            <span>{totalComments}</span>
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
