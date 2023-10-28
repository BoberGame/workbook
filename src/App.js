import './App.scss';
import Header from './components/Header/Header';
import AppRouter from './components/AppRouter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourse } from './store/slices/lessonsSlice';
import Loader from './components/Loader/Loader';
import { AUTH_STORAGE_KEY, setUserData } from './store/slices/authSlice';

const App = () => {
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.lessons);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY));
    if (userData) {
      dispatch(setUserData({ userData }));
    }
    dispatch(fetchCourse());
  }, [dispatch]);

  if (isFetching) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <main className="app">
        <AppRouter />
      </main>
    </>
  );
};

export default App;
