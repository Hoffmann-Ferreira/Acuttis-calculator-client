import React, { useEffect } from 'react';
import * as yup from 'yup';
import AccessForm from '../../components/AccessForm';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styles';

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
      navigate('/calculadora');
    } else {
      navigate('/');
    }
  }, []);

  return (
    <>
      <Styled.HeaderLogin>
        <div className='range'>
          <h2>Calculadora de jornada de trabalho Acuttis</h2>
        </div>
      </Styled.HeaderLogin>
      <Styled.MainLogin>
        <AccessForm schema={loginSchema} rote='/login' registering={false} />
      </Styled.MainLogin>
    </>
  );
};

export default Login;
