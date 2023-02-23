import Navigation from '../components/Navigation';
import ThreadCard from '../components/ThreadCard';
import SideBar from '../components/SideBar';

function HomePage() {
  return (
    <div className="bg-[#fef6e4] min-h-screen">
      <Navigation />
      <div className="flex flex-row justify-center my-6">
        <SideBar />
        <ThreadCard />
      </div>
    </div>
  );
}

export default HomePage;
