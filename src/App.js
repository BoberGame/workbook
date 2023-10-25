import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import { UserContext } from './context';
import AppRouter from './components/AppRouter';
import { useEffect, useState } from 'react';
import data from '../src/data.json';

const { course } = data;

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState({ fullName: '', group: '' });

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      setUserData(JSON.parse(userData));
      setIsAuth(true);
    }
  }, []);

  return (
    <UserContext.Provider value={{ isAuth, setIsAuth, course, userData, setUserData }}>
      <BrowserRouter basename="/workbook">
        <Header />
        <main className="app">
          <AppRouter />
        </main>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
