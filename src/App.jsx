import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Detailpage from './pages/DetailPage';
import { asyncPreloadProcess } from './states/isPreload/action';
import Navigation from './components/Navigation';
import Loading from './components/Loading';

function App() {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <div className="bg-[#fef6e4] min-h-screen relative">
      <Loading />
      <header className="sticky top-0 bg-[#fef6e4]">
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/threads/:id" element={<Detailpage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
