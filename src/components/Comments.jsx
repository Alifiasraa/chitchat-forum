/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import {
  AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike, AiOutlineClockCircle,
} from 'react-icons/ai';
import postedAt from '../utils';

function Comments({
  content, createdAt, upVotesBy, downVotesBy, owner, authUser,
  upvoteComment, downvoteComment, threadId, commentId,
}) {
  const isCommentUpvoted = upVotesBy.includes(authUser);
  const isCommentDownvoted = downVotesBy.includes(authUser);

  const onUpvoteClick = (event) => {
    event.stopPropagation();
    upvoteComment(threadId, commentId);
  };

  const onDownvoteClick = (event) => {
    event.stopPropagation();
    downvoteComment(threadId, commentId);
  };

  return (
    <div className="flex">
      <div className="min-h-fit w-full border-2 rounded-2xl p-6 mx-3 mt-3 mb-1 shadow-slate-300 bg-[#f3d2c1]">
        <div className="flex items-center">
          <img src={owner.avatar} alt="o" className="w-10 h-10 bg-slate-500" />
          <div className="flex flex-col ml-3">
            <h4 className="text-lg font-semibold">{owner?.name}</h4>
            <div className="flex items-center">
              <span><AiOutlineClockCircle size={14} /></span>
              <span className="ml-1 text-black text-sm">{postedAt(createdAt)}</span>
            </div>
          </div>
        </div>

        {/* menampilkan data comments supaya html nya tidak terlihat */}
        <div className="mt-3">
          <div
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>

        <div className="flex justify-between items-center mt-5">
          <div className="flex gap-2">
            <button type="button" aria-label="upvote" onClick={onUpvoteClick}>
              {' '}
              {/* <AiOutlineLike size={22} /> */}
              { isCommentUpvoted
                ? <AiFillLike size={22} />
                : <AiOutlineLike size={22} /> }
            </button>
            <span>{upVotesBy.length}</span>

            <button type="button" aria-label="downvote" onClick={onDownvoteClick}>
              {' '}
              {/* <AiOutlineDislike size={22} /> */}
              { isCommentDownvoted
                ? <AiFillDislike size={22} />
                : <AiOutlineDislike size={22} /> }
            </button>
            <span>{downVotesBy.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
Comments.propTypes = {
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  authUser: PropTypes.string.isRequired,
  upvoteComment: PropTypes.func.isRequired,
  downvoteComment: PropTypes.func.isRequired,
  threadId: PropTypes.string.isRequired,
  commentId: PropTypes.string.isRequired,
};

export default Comments;
