import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import api from '../../services/api';
import HoursHistory from '../../components/History';
import toast from 'react-hot-toast';
import * as Styled from './styles';

const Calculator = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [value, setValue] = useState(0);
  const [refresh, setRefresh] = useState(false);

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
    reset,
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
        setRefresh(!refresh);
        reset();
      })
      .catch((err) => {
        toast.error(err.response.data.menssageError, {
          icon: '❌',
          style: {
            borderRadius: '10px',
            background: '#ffffff',
            color: '#04383e',
          },
        });
      });
  };

  const logout = () => {
    localStorage.clear();
    navigate('/');
    toast.success('Deslogado!', {
      icon: '✅',
      style: {
        borderRadius: '10px',
        background: '#ffffff',
        color: '#04383e',
      },
    });
  };

  return (
    <>
      <Styled.HeaderCalc>
        <div className='logoContainer'>
          <img
            src='https://media.discordapp.net/attachments/967162864408346697/1128031106147565618/cropped-Logo-Acuttis-2-e1620761195611.png'
            alt='Logo Acuttis'
          />
        </div>
      </Styled.HeaderCalc>
      <Styled.MainCalc>
        <Styled.InfoContainer>
          <button className='buttonLogout' onClick={() => logout()}>
            Sair
          </button>
          <h1>Sistema de apuração de jornada de trabalho </h1>
          <h3>Regras:</h3>
          <p>Preencha os campos a baixo seguindo as seguintes diretrizes!</p>
          <ol>
            <li>Prenchimento obrigatório de todos os campos;</li>
            <li>A jornada de trabalho não deve ultrapassar 24hrs;</li>
            <li>
              Os valores das horas diurna e noturna deve ser em moeda nacional,
              real;
            </li>
          </ol>
        </Styled.InfoContainer>

        <Styled.FormCalc onSubmit={handleSubmit(handleCaculation)}>
          <label>Nome do colaborador:</label>
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
        </Styled.FormCalc>
        <Styled.ValueContainer>
          <p> Valor total das horas R$: {value}</p>
        </Styled.ValueContainer>

        <Styled.HistoryContainer>
          <HoursHistory refresh={refresh} />
        </Styled.HistoryContainer>
      </Styled.MainCalc>
    </>
  );
};

export default Calculator;
