import React from 'react';
import * as yup from 'yup';
import AccessForm from '../../components/AccessForm';
import * as Styled from './styles';

const Register = () => {
  const registerSchema = yup.object({
    name: yup.string().required('Preenchimento obrigatório!'),
    email: yup.string().email('email inválido'),
    password: yup
      .string()
      .matches(
        /((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        'Não está dentro do padrão!'
      )
      .required('Preenchimento obrigatório!'),
  });

  return (
    <>
      <Styled.HeaderRegister>
        <div className='range'>
          <h2>Calculadora de jornada de trabalho Acuttis</h2>
        </div>
      </Styled.HeaderRegister>
      <Styled.MainRegister>
        <AccessForm
          schema={registerSchema}
          rote='/register'
          registering={true}
        />
      </Styled.MainRegister>
    </>
  );
};

export default Register;
