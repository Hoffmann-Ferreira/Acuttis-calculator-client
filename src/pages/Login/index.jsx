import React, { useEffect } from 'react';
import * as yup from 'yup';
import AccessForm from '../../components/AccessForm';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const loginSchema = yup.object({
    email: yup
      .string()
      .email('email inválido')
      .required('Preenchimento obrigatório do email'),
    password: yup
      .string()
      .matches(
        /((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        'Senha incorreta!'
      )
      .required('Preenchimento obrigatório da senha!'),
  });

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      navigate('/registrar');
      console.log('entrei')
    } else {
      navigate('/');
    }
  }, [])

  return (
    <>
      <header>
        <h1>Bem vindo a calculadora de jornada de trabalho Acuttis</h1>
        {/* <button onClick={() => navigate('/registrar')}>Cadastrar-se</button> */}
      </header>
      <main>
        <AccessForm schema={loginSchema} rote='/login' registering={false} />
      </main>
    </>
  );
};

export default Login;
