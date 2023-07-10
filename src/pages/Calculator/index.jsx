import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Calculator = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, []);
  return (
    <>
      <h1>Hello world</h1>
    </>
  );
};

export default Calculator;
