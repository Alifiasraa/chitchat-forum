/* eslint-disable max-len */
/* eslint-disable no-undef */

/**
 * test scenario for threadsReducer
 *
 * - threadReducers function
 *  - should return the initial state when given by unknown action
 *  - should return the threads when given by RECEIVE_THREADS action
 *  - should return the threads with the new talk when given by ADD_THREAD action
 *  - should return the threads with the toggled upvote thread when given by TOGGLE_UPVOTE_THREAD action
 *  - should return the threads with the toggled downvote thread when given by TOGGLE_DOWNVOTE_THREAD action
 *
 */

import threadsReducer from './reducer';

describe('threadReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange = bagian untuk mengumpulkan seluruh kebutuhan yang diperlukan untuk menguji sebuah unit.
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action = bagian aksi dari unit yang diuji.
    const nextState = threadsReducer(initialState, action);

    // assert = bagian untuk memeriksa efek/hasil dari action yang telah dilakukan oleh unit yang diuji.
    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_THREADS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            id: 'thread-1',
            title: 'Thread Pertama',
            body: 'Ini adalah thread pertama',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-1',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
          {
            id: 'thread-2',
            title: 'Thread Kedua',
            body: 'Ini adalah thread kedua',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-2',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
        ],
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the threads with the new talk when given by ADD_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];

    const action = {
      type: 'ADD_THREAD',
      payload: {
        thread: {
          id: 'thread-2',
          title: 'Thread Kedua',
          body: 'Ini adalah thread kedua',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          ownerId: 'users-2',
          upVotesBy: [],
          downVotesBy: [],
          totalComments: 0,
        },
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it('should return the threads with the toggled upvote thread when given by TOGGLE_UPVOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'vote-1',
        userId: 'users-1',
        threadId: 'thread-1',
        upVotesBy: [
          'users-1',
        ],
        voteType: 1,
      },
    ];

    const action = {
      type: 'TOGGLE_UPVOTE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'users-1',
      },
    };

    // action: upvote thread
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
      },
    ]);

    // action: cancel upvote thread
    const nextState2 = threadsReducer(nextState, action);

    // assert
    expect(nextState2).toEqual(initialState);
  });

  it('should return the threads with the toggled downvote thread when given by TOGGLE_DOWNVOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'vote-1',
        userId: 'users-1',
        threadId: 'thread-1',
        downVotesBy: [
          'users-1',
        ],
        voteType: 1,
      },
    ];

    const action = {
      type: 'TOGGLE_DOWNVOTE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'users-1',
      },
    };

    // action: downvote thread
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [action.payload.userId],
      },
    ]);

    // action: cancel downvote thread
    const nextState2 = threadsReducer(nextState, action);

    // assert
    expect(nextState2).toEqual(initialState);
  });
});
