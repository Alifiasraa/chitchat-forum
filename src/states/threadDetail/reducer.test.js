/* eslint-disable no-undef */
/* eslint-disable max-len */
/**
 * scenario for threadDetailReducer
 *
 * threadDetailReducers function
 * - should return the initial state when given by unknown action
 * - should return the thread detail when given by RECEIVE_THREAD_DETAIL action
 * - should return null when given by CLEAR_THREAD_DETAIL action
 * - should return the thread detail with the toggled upvote thread when given by TOGGLE_UPVOTE_THREAD_DETAIL action
 * - should return the thread detail with the toggled downvote thread when given by TOGGLE_DOWNVOTE_THREAD_DETAIL action
 * - should return the comment when given by CREATE_COMMENT
 * - should return the comment with the toggled upvote comment when given by TOGGLE_UPVOTE_COMMENT action
 * - should return the comment with the toggled downvote comment when given by TOGGLE_DOWNVOTE_COMMENT action
*/

import threadDetailReducer from './reducer';

describe('threadDetailReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the thread detail when given by RECEIVE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        threadDetail: [
          {
            id: 'thread-1',
            title: 'Thread Pertama',
            body: 'Ini adalah thread pertama',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            owner: {
              id: 'users-1',
              name: 'John Doe',
              avatar: 'https://generated-image-url.jpg',
            },
          },
        ],
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it('should return null when given by CLEAR_THREAD_DETAIL action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'CLEAR_THREAD_DETAIL', payload: null };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload);
  });

  it('should return the thread detail with the toggled upvote thread when given by TOGGLE_UPVOTE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = [
      {
        id: 'vote-1',
        userId: 'users-1',
        upVotesBy: [
          'users-1',
        ],
        voteType: 1,
      },
    ];

    const action = {
      type: 'TOGGLE_UPVOTE_THREAD_DETAIL',
      payload: {
        userId: 'users-1',
      },
    };

    // action: upvote thread detail
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
      },
    ]);

    // action: cancel upvote thread detail
    const nextState2 = threadDetailReducer(nextState, action);

    // assert
    expect(nextState2).toEqual(initialState);
  });

  it('should return the thread detail with the toggled downvote thread when given by TOGGLE_DOWNVOTE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = [
      {
        id: 'vote-1',
        userId: 'users-1',
        downVotesBy: [
          'users-1',
        ],
        voteType: 1,
      },
    ];

    const action = {
      type: 'TOGGLE_DOWNVOTE_THREAD_DETAIL',
      payload: {
        userId: 'users-1',
      },
    };

    // action: downvote thread detail
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [action.payload.userId],
      },
    ]);

    // action: cancel downvote thread detail
    const nextState2 = threadDetailReducer(nextState, action);

    // assert
    expect(nextState2).toEqual(initialState);
  });

  it('should return the comment when given by CREATE_COMMENT', () => {
  // arrange
    const initialState = {
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          upVotesBy: [],
          downVotesBy: [],
          owner: {
            id: 'users-1',
            name: 'John Doe',
            email: 'john@example.com',
          },
        },
      ],
    };

    const action = {
      type: 'CREATE_COMMENT',
      payload: {
        comment: {
          id: 'comment-2',
          content: 'Ini adalah komentar kedua',
          createdAt: '2021-06-21T07:00:00.000Z',
          upVotesBy: [],
          downVotesBy: [],
          owner: {
            id: 'users-2',
            name: 'John Doe',
            email: 'john@example.com',
          },
        },
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState.comments).toHaveLength(2);
    expect(nextState.comments[0].content).toEqual('Ini adalah komentar kedua');
  });

  it('should return the comment with the toggled upvote comment when given by TOGGLE_UPVOTE_COMMENT action', () => {
    // arrange
    const initialState = {
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          upVotesBy: [],
          downVotesBy: [],
          owner: {
            id: 'users-1',
            name: 'John Doe',
            email: 'john@example.com',
          },
        },
      ],
    };

    const action = {
      type: 'TOGGLE_UPVOTE_COMMENT',
      payload: {
        commentId: 'comment-1',
      },
    };

    // action: upvote comment
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState.comments).toEqual([
      {
        ...initialState.comments[0],
        upVotesBy: [action.payload.commentId],
      },
    ]);

    // action: cancel upvote comment
    const nextState2 = threadDetailReducer(nextState, action);

    // assert
    expect(nextState2).toEqual(initialState);
  });

  it('should return the comment with the toggled downvote comment when given by TOGGLE_DOWNVOTE_COMMENT action', () => {
    // arrange
    const initialState = {
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          upVotesBy: [],
          downVotesBy: [],
          owner: {
            id: 'users-1',
            name: 'John Doe',
            email: 'john@example.com',
          },
        },
      ],
    };

    const action = {
      type: 'TOGGLE_DOWNVOTE_COMMENT',
      payload: {
        commentId: 'comment-1',
      },
    };

    // action: downvote comment
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState.comments).toEqual([
      {
        ...initialState.comments[0],
        downVotesBy: [action.payload.commentId],
      },
    ]);

    // action: cancel downvote comment
    const nextState2 = threadDetailReducer(nextState, action);

    // assert
    expect(nextState2).toEqual(initialState);
  });
});
