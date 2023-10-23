import React, { useContext } from 'react';
import { UserContext } from '../context';
import { privateRoutes, publicRoutes } from '../router/router';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  const { isAuth } = useContext(UserContext);

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
