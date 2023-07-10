import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import * as Styled from './styles';

const HoursHistory = (props) => {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');
  const [userHistory, setUserHistory] = useState([]);

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleHistory = () => {
    api
      .get(`/find-all-hours/${userId}`, headers)
      .then((res) => {
        setUserHistory(res.data.hours.reverse());
      })
      .catch((err) => {
        console.log('deu errado', err);
      });
  };
  console.log('historico', userHistory);

  useEffect(() => {
    handleHistory();
  }, [props.refresh]);

  return (
    <>
      <Styled.ContainerHistory>
        <h2>Histórico de horas registradas no sistema</h2>
        <Styled.HoursContainer>
          {userHistory.map((infoHours) => {
            return (
              <>
                <Styled.InfoContainer>
                  <ul key={infoHours.id}>
                    <li>
                      <p>Nome: {infoHours.collaborator} </p>
                      <p>Data de entrada: {infoHours.initialDate}</p>
                      <p>Horário de entrada: {infoHours.initialHours}</p>
                      <p>Data de saída: {infoHours.finalDate}</p>
                      <p>Horário de saída: {infoHours.finalHours}</p>
                      <p>
                        Valor a receber R$:{' '}
                        {infoHours.amount.toString().replace('.', ',')}
                      </p>
                    </li>
                  </ul>
                </Styled.InfoContainer>
              </>
            );
          })}
        </Styled.HoursContainer>
      </Styled.ContainerHistory>
    </>
  );
};

export default HoursHistory;
