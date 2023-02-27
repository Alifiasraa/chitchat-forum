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
    user: users.find((user) => user.id === thread.user),
    authUser: authUser.id,
  }));

  return (
    <div className="bg-[#fef6e4] min-h-screen">
      <div className="flex flex-row justify-center mx-20">
        <SideBar />
        <ThreadList threads={threadList} upvote={onUpvote} downvote={onDownvote} />
      </div>
    </div>
  );
}

export default HomePage;
