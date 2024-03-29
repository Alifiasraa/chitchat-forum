/* eslint-disable no-case-declarations */
/* eslint-disable no-console */
import { ActionType } from './action';

function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    case ActionType.TOGGLE_UPVOTE_THREAD_DETAIL:
      if (!threadDetail || !threadDetail.upVotesBy) {
        return threadDetail;
      }
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.includes(action.payload.userId)
          ? threadDetail.upVotesBy.filter((id) => id !== action.payload.userId)
          : threadDetail.upVotesBy.concat(action.payload.userId),
      };
    case ActionType.TOGGLE_DOWNVOTE_THREAD_DETAIL:
      if (!threadDetail || !threadDetail.upVotesBy) {
        return threadDetail;
      }
      return {
        ...threadDetail,
        downVotesBy: threadDetail.downVotesBy.includes(action.payload.userId)
          ? threadDetail.downVotesBy.filter((id) => id !== action.payload.userId)
          : threadDetail.downVotesBy.concat(action.payload.userId),
      };
    case ActionType.CREATE_COMMENT:
      return {
        ...threadDetail,
        comments: [
          action.payload.comment,
          ...threadDetail.comments,
        ],
      };
    case ActionType.TOGGLE_UPVOTE_COMMENT:
      // console.log(threadDetail);
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.includes(action.payload.commentId)
                ? comment.upVotesBy.filter((id) => id !== action.payload.commentId)
                : comment.upVotesBy.concat([action.payload.commentId]),
            };
          } return comment;
        }),
      };
    case ActionType.TOGGLE_DOWNVOTE_COMMENT:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              downVotesBy: comment.downVotesBy.includes(action.payload.commentId)
                ? comment.downVotesBy.filter((id) => id !== action.payload.commentId)
                : comment.downVotesBy.concat([action.payload.commentId]),
            };
          } return comment;
        }),
      };
    default:
      return threadDetail;
  }
}

export default threadDetailReducer;
