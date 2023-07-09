import React from 'react';
import * as yup from 'yup';
import AccessForm from '../../components/AccessForm';

const loginSchema = yup.object({
    email: yup
      .string()
      .email('email inválido')
      .required('Preenchimento obrigatório do email'),
    senha: yup
      .string()
      .matches(
        /((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        'Senha incorreta!'
      ).required('Preenchimento obrigatório da senha!'),
  });

  const Login = () => {
    return(
        <>
        <header>
            <h1>Bem vindo a calculadora de jornada de trabalho Acuttis</h1>
        </header>
        <main>
            <AccessForm schema={loginSchema} rote='/login' registering={false}/>
        </main>
        </>
    )
  }

  export default Login;
