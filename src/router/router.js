import { Navigate } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Lesson from '../pages/Lesson/Lesson';
import Login from '../pages/Login/Login';
import UserProfile from '../pages/UserProfile/UserProfile';

const privateRoutes = [
  {
    path: '*',
    element: <Navigate to="/home" replace />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/lesson/:lessonId',
    element: <Lesson />,
  },
  {
    path: '/user',
    element: <UserProfile />,
  },
];

const publicRoutes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />,
  },
];

export { privateRoutes, publicRoutes };
