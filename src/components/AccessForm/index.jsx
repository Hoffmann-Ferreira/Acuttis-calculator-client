import React from 'react';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import api from '../../services/api';

const AccessForm = (props) => {
  const navigate = useNavigate();
  const resolver = yupResolver(props.schema);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver });

  const handleAcess = (data) => {
    api
      .post(props.rote, data)
      .then((res) => {
        console.log('data', res.data);
        console.log('token', res.data.token);
        localStorage.setItem('token', res.data.token);
      })
      .catch((err) => {
        console.log('deu ruim', err);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleAcess)}>
        <fieldset>
          {props.registering && (
            <>
              <label>Nome:</label>
              <input
                type='text'
                placeholder='Digite seu nome de usuário'
                {...register('name', { required: true })}
              />
              <p>{errors?.name?.message}</p>
            </>
          )}
          <label>Endereço de email:</label>
          <input
            type='text'
            placeholder='Digite seu email'
            {...register('email', { required: true })}
          />
          <p>{errors?.email?.message}</p>
          <label>Digite sua senha:</label>
          {props.registering && (
            <p>
              A senha deve conter no mínimo 8 caracteres e incluir pelo menos
              uma letra maiúscula um dígito e caracter especial
            </p>
          )}
          <input
            type='tetxt'
            placeholder='Digite sua senha'
            {...register('password', { required: true })}
          />
          <p>{errors?.senha?.message}</p>
          <div>
            {props.registering ? (
              <>
                <button type='submit'>Salvar</button>
                <button onClick={() => navigate('/')}>
                  Retornar para login
                </button>
              </>
            ) : (
              <>
                <button type='submit'>Login</button>
                <button onClick={() => navigate('/registrar')}>
                  Cadastrar-se
                </button>
              </>
            )}
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AccessForm;
