import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { asyncCreateComment } from '../states/threadDetail/action';

function CommentInput() {
  const [content, setContent] = useState('');
  const { id } = useParams();
  const dispatch = useDispatch();

  const onCreateComment = () => {
    dispatch(asyncCreateComment({ threadId: id, content }));
  };

  function createCommentHandler() {
    if (content.trim()) {
      onCreateComment(content);
      setContent('');
    }
  }

  function handleContentChange({ target }) {
    if (target.value.length <= 100) {
      setContent(target.value);
    }
  }

  return (
    <div className="flex gap-1">
      <div className="border border-slate-600 rounded-3xl w-full p-2 ml-3 inline justify-center relative">
        <input
          className="pl-2 w-full focus:outline-none bg-transparent"
          placeholder="Talk your reply ..."
          value={content}
          onChange={handleContentChange}
        />
      </div>

      <button type="submit" onClick={createCommentHandler} className="border w-1/5 rounded-3xl mr-3 bg-[#ff8ba7] hover:bg-[#ffc6c7] py-2 px-8 font-semibold text-center">
        Send
      </button>
    </div>
  );
}

export default CommentInput;
