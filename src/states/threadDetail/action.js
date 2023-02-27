// import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  TOGGLE_UPVOTE_THREAD_DETAIL: 'TOGGLE_UPVOTE_THREAD_DETAIL',
  TOGGLE_DOWNVOTE_THREAD_DETAIL: 'TOGGLE_DOWNVOTE_THREAD_DETAIL',
  CREATE_COMMENT: 'CREATE_COMMENT',
  TOGGLE_UPVOTE_COMMENT: 'TOGGLE_UPVOTE_COMMENT',
  TOGGLE_DOWNVOTE_COMMENT: 'TOGGLE_DOWNVOTE_COMMENT',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function toggleUpvoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_UPVOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function toggleDownvoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    // dispatch(showLoading());
    try {
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }
    // dispatch(hideLoading());
  };
}

function asyncToggleUpvoteThreadDetail() {
  return async (dispatch, getState) => {
    // dispatch(showLoading());
    const { authUser, threadDetail } = getState();
    dispatch(toggleUpvoteThreadDetailActionCreator(authUser.id));

    try {
      await api.upvoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }
    // dispatch(hideLoading());
  };
}

function asyncToggleDownvoteThreadDetail() {
  return async (dispatch, getState) => {
    // dispatch(showLoading());
    const { authUser, threadDetail } = getState();
    dispatch(toggleDownvoteThreadDetailActionCreator(authUser.id));

    try {
      await api.downvoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }
    // dispatch(hideLoading());
  };
}

// buat comment

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
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  toggleUpvoteThreadDetailActionCreator,
  toggleDownvoteThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  asyncToggleUpvoteThreadDetail,
  asyncToggleDownvoteThreadDetail,
  createCommentActionCreator,
  toggleUpvoteCommentActionCreator,
  toggleDownvoteCommentActionCreator,
  asyncCreateComment,
  asyncUpvoteComment,
  asyncDownvoteComment,
};
