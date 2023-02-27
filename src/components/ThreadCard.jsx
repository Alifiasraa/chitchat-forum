/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import {
  AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike,
  AiOutlineComment, AiOutlineClockCircle,
} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import postedAt from '../utils';

// user blm dimasukin kesini
function ThreadCard({
  id, title, body, category, createdAt, upVotesBy, downVotesBy, totalComments,
  upvote, downvote, authUser,
}) {
  const navigate = useNavigate();
  const isThreadUpvoted = upVotesBy.includes(authUser);
  const isThreadDownvoted = downVotesBy.includes(authUser);

  const onUpvoteClick = (event) => {
    event.stopPropagation();
    upvote(id);
  };

  const onDownvoteClick = (event) => {
    event.stopPropagation();
    downvote(id);
  };

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/threads/${id}`);
    }
  };

  return (
    <div className="flex justify-center">
      <div onClick={onThreadClick} onKeyDown={onThreadPress} className="min-h-fit w-2/3 border-2 rounded-2xl p-6 m-3 shadow-slate-300 bg-[#f3d2c1]">
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
            {
              upvote && (
              <>
                <button type="button" aria-label="upvote" onClick={onUpvoteClick}>
                  { isThreadUpvoted
                    ? <AiFillLike size={22} />
                    : <AiOutlineLike size={22} /> }
                </button>
                <span>{upVotesBy.length}</span>
              </>
              )
            }
            {
              downvote && (
              <>
                <button type="button" aria-label="downvote" onClick={onDownvoteClick}>
                  { isThreadDownvoted
                    ? <AiFillDislike size={22} />
                    : <AiOutlineDislike size={22} /> }
                </button>
                <span>{downVotesBy.length}</span>
              </>
              )
            }

            <button type="button">
              <AiOutlineComment size={22} />
            </button>
            <span>{totalComments}</span>
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

export default ThreadCard;
