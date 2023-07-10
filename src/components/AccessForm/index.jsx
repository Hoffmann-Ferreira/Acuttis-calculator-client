import React from 'react';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import api from '../../services/api';
import toast from 'react-hot-toast';
import * as Styled from './styles';

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
        localStorage.setItem('userId', res.data.userId);

        if (props.registering) {
          navigate('/');
          toast.success('Cadastrado!', {
            icon: '✅',
            style: {
              borderRadius: '10px',
              background: '#ffffff',
              color: '#04383e',
            },
          });
        } else {
          navigate('/calculadora');
        }
      })
      .catch((err) => {
        console.log('Não logado', err);
        toast.error('Dados incorretos!', {
          icon: '❌',
          style: {
            borderRadius: '10px',
            background: '#ffffff',
            color: '#04383e',
          },
        });
      });
  };

  return (
    <>
      <Styled.FormAcess onSubmit={handleSubmit(handleAcess)}>
        <img
          src='https://media.discordapp.net/attachments/967162864408346697/1128031106147565618/cropped-Logo-Acuttis-2-e1620761195611.png'
          alt='Logo Acuttis'
        />
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
          type='email'
          placeholder='Digite seu email'
          {...register('email', { required: true })}
        />
        <p>{errors?.email?.message}</p>
        <label>Digite sua senha:</label>
        <input
          type='password'
          placeholder='Padrão esperado myPassword2!'
          {...register('password', { required: true })}
        />
        <p>{errors?.password?.message}</p>
        <div>
          {props.registering ? (
            <>
              <button type='submit'>Salvar</button>
              <button onClick={() => navigate('/')}>Retornar</button>
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
      </Styled.FormAcess>
    </>
  );
};

export default AccessForm;
