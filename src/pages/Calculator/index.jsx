import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import api from '../../services/api';

const Calculator = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [value, setValue] = useState(0);
//   let amout = 0;

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, []);
  const CalculaSchema = yup.object({
    collaborator: yup.string().required('Preenchimento de nome obrigatório'),
    initialDate: yup
      .string()
      .required('Preenchimento de data e horário inicial obrigatório'),
    finalDate: yup
      .string()
      .required('Preenchimento de data e horário final obrigatório'),
    daytimePrice: yup
      .string()
      .matches(
        /^\d+(?:,\d+)?$/,
        'Formato de valor errado, deve conter N,N ex 22,90'
      )
      .required('Preenchimento do valor da hora diurna obrigatório'),
    nightPrice: yup
      .string()
      .matches(
        /^\d+(?:,\d+)?$/,
        'Formato de valor errado, deve conter N,N ex 22,90'
      )
      .required('Preenchimento do valor da hora noturna obrigatório'),
  });

  const resolver = yupResolver(CalculaSchema);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver });

  const headers = {
    headers: {
        authorization: `Bearer ${token}`,
    },
};

  const handleCaculation = (data) => {
    data.daytimePrice = data.daytimePrice.replace(',', '.');
    data.nightPrice = data.nightPrice.replace(',', '.');
    api
      .post('/calculate-hours', data, headers)
      .then((res) => {
        setValue(res.data.createdServiceHours.amount);
        console.log('valor total', res.data.createdServiceHours.amount)
      })
      .catch((err) => {
        console.log(err);
        console.log('Não deu');
      });
  };

  // valor = valor.replace(",", ".")

  return (
    <>
      <header>
        <h1>Acuttis sistema de de apuração de horas trabalhadas </h1>
      </header>
      <main>
        <h2>Regras</h2>
        <form onSubmit={handleSubmit(handleCaculation)}>
          <labe>Nome do colaborador:</labe>
          <input
            type='text'
            placeholder='Nome colaborador'
            {...register('collaborator', { required: true })}
          />
          <p>{errors?.collaborator?.message}</p>

          <label>Data inicial com horário:</label>
          <input
            type='datetime-local'
            {...register('initialDate', { required: true })}
          />
          <p>{errors?.initialDate?.message}</p>

          <label>Data final com horário:</label>
          <input
            type='datetime-local'
            {...register('finalDate', { required: true })}
          />
          <p>{errors?.finalDate?.message}</p>

          <label>Valor da hora diurna em moenda nacional, real:</label>
          <input
            type='text'
            placeholder='Digitar apenas valor'
            {...register('daytimePrice', { required: true })}
          />
          <p>{errors?.daytimePrice?.message}</p>

          <label>Valor da hora noturna em moenda nacional, real:</label>
          <input
            type='text'
            placeholder='Digitar apenas valor'
            {...register('nightPrice', { required: true })}
          />
          <p>{errors?.nightPrice?.message}</p>
          <div>
            <button type='submit'>Calcular</button>
          </div>
        </form>
      </main>
      <p> valor total: {value}</p>
    </>
  );
};

export default Calculator;
