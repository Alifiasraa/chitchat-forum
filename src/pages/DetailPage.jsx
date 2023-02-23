/* eslint-disable jsx-a11y/anchor-is-valid */
import { BiArrowBack } from 'react-icons/bi';
import Navigation from '../components/Navigation';
import ThreadCard from '../components/ThreadCard';
import CommentInput from '../components/CommentInput';

function Detailpage() {
  return (
    <div className="bg-[#fef6e4] min-h-screen">
      <Navigation />
      <div className="w-3/5 mx-auto">
        <a className="flex items-center ml-3 mt-4">
          <BiArrowBack size={22} />
          {' '}
          <span className="ml-1 font-medium">Kembali</span>
        </a>
        <ThreadCard />
        <CommentInput />
      </div>
    </div>
  );
}

export default Detailpage;
