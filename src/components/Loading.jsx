import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

function Loading() {
  return (
    <div className="fixed w-full top-0 z-20 h-4">
      <LoadingBar />
    </div>
  );
}

export default Loading;
