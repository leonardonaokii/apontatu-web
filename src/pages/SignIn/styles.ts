import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #ffffff;
  border-radius: 30px;

  margin: 10px 0;

  width: 100%;
  max-width: 900px;
  height: 100%;
  max-height: 852px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    max-width: 500px; /* Garante que a imagem nunca ultrapasse 500px */
    height: auto; /* Mantém a proporção */
    margin-top: 50px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      max-width: 300px; /* Reduz o tamanho da imagem para telas menores */
    }

    @media (max-width: 480px) {
      max-width: 200px; /* Ajusta ainda mais para telas muito pequenas */
    }
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #ffffff;
  }

  button {
    margin-top: 15px;
    margin-bottom: 40px;
  }

  a {
    color: #837fd3;
    background: #ffffff;
    font-size: 16px;
    display: block;
    margin-bottom: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#837fd3')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;
