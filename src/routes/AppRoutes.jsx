import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Calculator from '../pages/Calculator';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/registrar' element={<Register/>} />
      <Route path='/calculadora' element={<Calculator/>} />
    </Routes>
  );
};

export default AppRouter;
