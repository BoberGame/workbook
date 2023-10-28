import React from 'react';
import { privateRoutes, publicRoutes } from '../router/router';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AppRouter = () => {
  const { isAuth } = useSelector((state) => state.auth);

  return isAuth ? (
    <Routes>
      {privateRoutes.map(({ path, element }) => (
        <Route path={path} element={element} key={path} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, element }) => (
        <Route path={path} element={element} key={path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
