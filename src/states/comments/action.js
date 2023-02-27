// import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  CREATE_COMMENT: 'CREATE_COMMENT',
  TOGGLE_UPVOTE_COMMENT: 'TOGGLE_UPVOTE_COMMENT',
  TOGGLE_DOWNVOTE_COMMENT: 'TOGGLE_DOWNVOTE_COMMENT',
};

function createCommentActionCreator(comment) {
  return {
    type: ActionType.CREATE_COMMENT,
    payload: {
      comment,
    },
  };
}

function toggleUpvoteCommentActionCreator({ threadId, commentId }) {
  return {
    type: ActionType.TOGGLE_UPVOTE_COMMENT,
    payload: {
      threadId,
      commentId,
    },
  };
}

function toggleDownvoteCommentActionCreator({ threadId, commentId }) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_COMMENT,
    payload: {
      threadId,
      commentId,
    },
  };
}

function asyncCreateComment({ threadId, content }) {
  return async (dispatch) => {
    // dispatch(showLoading());
    try {
      const comment = await api.createComment({ threadId, content });
      dispatch(createCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
    // dispatch(hideLoading());
  };
}

function asyncUpvoteComment(threadId, commentId) {
  return async (dispatch) => {
    // dispatch(showLoading());
    dispatch(toggleUpvoteCommentActionCreator({ threadId, commentId }));
    try {
      await api.upvoteComment(threadId, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleUpvoteCommentActionCreator({ threadId, commentId }));
    }
    // dispatch(hideLoading());
  };
}

function asyncDownvoteComment(threadId, commentId) {
  return async (dispatch) => {
    // dispatch(showLoading());
    dispatch(toggleDownvoteCommentActionCreator({ threadId, commentId }));
    try {
      await api.downvoteComment(threadId, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleDownvoteCommentActionCreator({ threadId, commentId }));
    }
    // dispatch(hideLoading());
  };
}

export {
  ActionType,
  createCommentActionCreator,
  toggleUpvoteCommentActionCreator,
  toggleDownvoteCommentActionCreator,
  asyncCreateComment,
  asyncUpvoteComment,
  asyncDownvoteComment,
};
