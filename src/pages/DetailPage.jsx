import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import CommentInput from '../components/CommentInput';
import {
  asyncDownvoteComment, asyncReceiveThreadDetail, asyncToggleDownvoteThreadDetail,
  asyncToggleUpvoteThreadDetail, asyncUpvoteComment,
} from '../states/threadDetail/action';
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

  const onUpvoteComment = (threadId, commentId) => {
    dispatch(asyncUpvoteComment(threadId, commentId));
  };

  const onDownvoteComment = (threadId, commentId) => {
    dispatch(asyncDownvoteComment(threadId, commentId));
  };

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
        // cara benernya kalo ga pake spread operator ...threadDetail
        id={id}
        title={threadDetail.title}
        body={threadDetail.body}
        category={threadDetail.category}
        createdAt={threadDetail.createdAt}
        upVotesBy={threadDetail.upVotesBy}
        downVotesBy={threadDetail.downVotesBy}
        authUser={threadDetail.authUser}
        owner={threadDetail.owner}
        upvoteThread={onUpvoteThread}
        downvoteThread={onDownvoteThread}
      />
      <CommentInput />
      {threadDetail?.comments?.map((comment) => (
        <Comments
          content={comment.content}
          createdAt={comment.createdAt}
          upVotesBy={comment.upVotesBy}
          downVotesBy={comment.downVotesBy}
          owner={comment.owner}
          commentId={comment.id}
          key={comment.id}
          threadId={id}
          authUser={authUser.id}
          upvoteComment={onUpvoteComment}
          downvoteComment={onDownvoteComment}
        />
      ))}

    </div>
  );
}

export default Detailpage;
