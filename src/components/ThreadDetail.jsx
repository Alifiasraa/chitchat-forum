import React from 'react';
import {
  AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike, AiOutlineClockCircle,
} from 'react-icons/ai';
import postedAt from '../utils';

function ThreadDetail({
  id, title, body, category, createdAt, upvoteThread, downvoteThread,
  upVotesBy, downVotesBy, authUser,
}) {
  const isThreadUpvoted = upVotesBy.includes(authUser);
  const isThreadDownvoted = downVotesBy.includes(authUser);

  return (
    <div className="flex justify-center">
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

        <div className="flex justify-between items-center mt-8">
          <div className="flex gap-2">
            <button type="button" aria-label="upvote" onClick={() => upvoteThread(id)}>
              { isThreadUpvoted
                ? <AiFillLike size={22} />
                : <AiOutlineLike size={22} /> }
            </button>
            <span>{upVotesBy.length}</span>

            <button type="button" aria-label="downvote" onClick={() => downvoteThread(id)}>
              { isThreadDownvoted
                ? <AiFillDislike size={22} />
                : <AiOutlineDislike size={22} /> }
            </button>
            <span>{downVotesBy.length}</span>

          </div>

          <p>
            Posted by
            {' '}
            {/* <div className="h-5 w-5">
              <img src={user.avatar} alt={user} />
            </div> */}
            <span className="font-semibold">Kazuha</span>
          </p>

        </div>
      </div>
    </div>
  );
}

export default ThreadDetail;
