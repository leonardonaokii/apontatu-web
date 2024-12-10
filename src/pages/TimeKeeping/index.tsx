import React, { useCallback } from 'react';
import { Container, Content, ButtonContainer } from './styles.ts';
import api from '../../services/api';
import Cookies from 'js-cookie';
import { useToast } from '../../hooks/toast';

import logoImg from '../../assets/logo.png';

import { useNavigate } from 'react-router-dom';

const TimeKeeping: React.FC = () => {
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleTimeRegister = useCallback(async (timeKeepingType: number) => {
    const token = Cookies.get('token');

    if (!token) {
      addToast({
        type: 'error',
        title: 'Token não encontrado!',
        description:
          'Token não encontrado, por favor faça o login novamente.',
      })

      navigate('/');
      return;
    }

    try {
      const response = await api.post(
        '/api/TimeKeeping/timeRegister',
        {
          date: new Date().toISOString(),
          timeKeepingType,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      alert(
        timeKeepingType === 1
          ? 'Ponto de entrada registrado com sucesso!'
          : 'Ponto de saída registrado com sucesso!',
      );
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Erro ao registrar o ponto:', error);
      alert('Erro ao registrar o ponto. Tente novamente.');
    }
  }, [ addToast, useNavigate ]);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Apontatu" />
        <ButtonContainer>
          <button
            className="clock-in-button"
            onClick={() => handleTimeRegister(1)}
          >
            Entrada
          </button>
          <button
            className="clock-out-button"
            onClick={() => handleTimeRegister(2)}
          >
            Saída
          </button>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default TimeKeeping;
