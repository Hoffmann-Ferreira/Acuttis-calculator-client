import React from 'react';
import * as yup from 'yup';
import AccessForm from '../../components/AccessForm';

const registerSchema = yup.object({
  name: yup.string().required('Preenchimento obrigatório do nome!'),
  email: yup.string().email('email inválido'),
  password: yup
    .string()
    .matches(
      /((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      'A senha deve incluir pelo menos uma letra maiúscula um dígito e caracter especial'
    )
    .required('Preenchimento obrigatório da senha!'),
});

const Register = () => {
  return (
    <>
      <AccessForm schema={registerSchema} rote='/register' registering={true} />
    </>
  );
};

export default Register;
