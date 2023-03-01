/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import CommentInput from '../components/CommentInput';
import { asyncReceiveThreadDetail, asyncToggleDownvoteThreadDetail, asyncToggleUpvoteThreadDetail } from '../states/threadDetail/action';
import ThreadDetail from '../components/ThreadDetail';
import Comments from '../components/Comments';

function Detailpage() {
  const { id } = useParams();
  const {
    threadDetail = null,
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onUpvoteThread = () => {
    dispatch(asyncToggleUpvoteThreadDetail());
  };

  const onDownvoteThread = () => {
    dispatch(asyncToggleDownvoteThreadDetail());
  };

  // const upvoteComment = () => {
  //   dispatch(asyncUpvoteComment(threadId, commentId));
  // }

  if (!threadDetail) {
    return null;
  }

  return (
    <div className="w-3/5 mx-auto">
      <Link to="/" className="flex items-center ml-3 mt-4">
        <BiArrowBack size={22} />
        {' '}
        <span className="ml-1 font-medium">Back</span>
      </Link>
      <ThreadDetail
        {...threadDetail}
        authUser={authUser.id}
        upvoteThread={onUpvoteThread}
        downvoteThread={onDownvoteThread}
      />
      <CommentInput />
      {threadDetail.comments.map((comment) => (
        <Comments key={comment.id} content={comment.content} />
      ))}

    </div>
  );
}

export default Detailpage;
