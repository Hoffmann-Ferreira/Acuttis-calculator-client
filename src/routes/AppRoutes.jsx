import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path='/' Component={Login} />
      <Route exact path='registrar' Component={Register} />
    </Routes>
  );
};

export default AppRouter;
