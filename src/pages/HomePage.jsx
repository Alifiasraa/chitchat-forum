/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThreadList from '../components/ThreadList';
import SideBar from '../components/SideBar';
import asyncPopulateUserAndThreads from '../states/shared/action';
import { asyncToggleDownvoteThread, asyncToggleUpvoteThread } from '../states/threads/action';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUserAndThreads());
  }, [dispatch]);

  const onUpvote = (id) => {
    dispatch(asyncToggleUpvoteThread(id));
  };

  const onDownvote = (id) => {
    dispatch(asyncToggleDownvoteThread(id));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <div className="bg-[#fef6e4] min-h-screen">
      <div className=" flex flex-row justify-center mx-36 my-3 gap-4">
        <div className=" w-1/3">
          <SideBar user={authUser} />
        </div>
        <div className="w-2/3">
          <ThreadList threads={threadList} upvote={onUpvote} downvote={onDownvote} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
