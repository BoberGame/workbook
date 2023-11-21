import './App.scss';
import Header from './components/Header/Header';
import AppRouter from './components/AppRouter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './components/Loader/Loader';
import { AUTH_STORAGE_KEY, authActions } from './store/slices/authSlice';
import { fetchCourse } from './store/slices/lessonsSlice';

const App = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.lessons.isFetching);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY));
    if (userData) {
      dispatch(authActions.setUserData({ userData }));
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
