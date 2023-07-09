import React from 'react';
import * as yup from 'yup';
import LoginForm from '../../components/LoginForm';

const registerSchema = yup.object({
  name: yup.string().required('Preenchimento obrigatório do nome!'),
  email: yup.string().email('email inválido'),
  senha: yup
    .string()
    .matches(
      /((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      'A senha deve incluir pelo menos uma letra maiúscula um dígito e caracter especial'
    ).required('Preenchimento obrigatório da senha!'),
});

const Register = () => {
  return <>
  <LoginForm schema={registerSchema} rote='/register' registering= {true}/>
  </>;
};

export default Register;
