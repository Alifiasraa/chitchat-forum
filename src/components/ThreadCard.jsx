/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import {
  AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike,
  AiOutlineComment, AiOutlineClockCircle,
} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import postedAt from '../utils';

function ThreadCard({
  id, title, body, category, createdAt, upVotesBy, downVotesBy, totalComments,
  upvote, downvote, authUser, user,
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
      <div onClick={onThreadClick} onKeyDown={onThreadPress} className="min-h-fit w-full border-2 rounded-2xl mb-3 p-6 shadow-slate-300 bg-[#f3d2c1]">
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

        {/* menampilkan data thread supaya html nya tidak terlihat */}
        <div
          dangerouslySetInnerHTML={{ __html: body }}
        />

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

          <div className="flex gap-1 items-center">
            Posted by
            {' '}
            <img src={user.avatar} alt={user} className="h-5 w-5 border rounded-full" />
            <span className="font-semibold">{user?.name}</span>
          </div>

        </div>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  upvote: PropTypes.func.isRequired,
  downvote: PropTypes.func.isRequired,
  authUser: PropTypes.string.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

export default ThreadCard;
