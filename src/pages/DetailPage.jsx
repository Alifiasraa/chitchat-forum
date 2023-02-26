/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import CommentInput from '../components/CommentInput';
import ThreadList from '../components/ThreadList';

function Detailpage() {
  return (
    <div className="w-3/5 mx-auto">
      <Link to="/">
        <a className="flex items-center ml-3 mt-4">
          <BiArrowBack size={22} />
          {' '}
          <span className="ml-1 font-medium">Kembali</span>
        </a>
      </Link>
      <ThreadList />
      <CommentInput />
    </div>
  );
}

export default Detailpage;
