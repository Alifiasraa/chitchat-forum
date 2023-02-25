/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ThreadCard from './ThreadCard';

function ThreadList({ threads, upvote, downvote }) {
  return (
    <div>
      {
        threads.map((thread) => (
          <ThreadCard
            {...thread}
            key={thread.id}
            upvote={upvote}
            downvote={downvote}
          />
        ))
       }
    </div>
  );
}

export default ThreadList;
