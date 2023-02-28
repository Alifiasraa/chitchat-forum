import React from 'react';
import {
  AiOutlineLike, AiOutlineDislike, AiOutlineClockCircle,
} from 'react-icons/ai';
import postedAt from '../utils';

function Comments({
  content, createdAt, upVotesBy, downVotesBy,
}) {
  // const isCommentUpvoted = upVotesBy.includes(authUser);
  // const isCommentDownvoted = downVotesBy.includes(authUser);

  return (
    <div className="flex">
      <div className="min-h-fit w-full border-2 rounded-2xl p-6 m-3 shadow-slate-300 bg-[#f3d2c1]">
        <div className="flex items-center">
          <img src="" alt="o" className="w-10 h-10 bg-slate-500" />
          <div className="flex items-center flex-col">
            <h4 className="text-lg font-semibold">Hutao</h4>
            <div className="flex items-center ml-4">
              <span><AiOutlineClockCircle size={14} /></span>
              <span className="ml-1 text-black text-sm">{postedAt(createdAt)}</span>
            </div>
          </div>
        </div>

        <div className="my-3">
          <p>
            {content}
          </p>
        </div>

        <div className="flex justify-between items-center mt-8">
          <div className="flex gap-2">
            <button type="button" aria-label="upvote">
              {' '}
              <AiOutlineLike size={22} />
              {/* { isCommentUpvoted
                ? <AiFillLike size={22} />
                : <AiOutlineLike size={22} /> } */}
            </button>
            <span>{upVotesBy}</span>

            <button type="button" aria-label="downvote">
              {' '}
              <AiOutlineDislike size={22} />
              {/* { isCommentDownvoted
                ? <AiFillDislike size={22} />
                : <AiOutlineDislike size={22} /> } */}
            </button>
            <span>{downVotesBy}</span>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Comments;
