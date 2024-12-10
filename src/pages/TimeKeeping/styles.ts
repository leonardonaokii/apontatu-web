import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  button {
  width: 200px;
  padding: 12px 16px;
  margin: 10px 0;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

  .clock-in-button {
    background-color: #4caf50;
    margin: 5px;
  }

  .clock-in-button:hover {
    background-color: #45a045;
  }

  .clock-out-button {
    background-color: #f44336;
    margin: 5px;
  }

  .clock-out-button:hover {
    background-color: #d32f2f;
  }
`

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
    margin-bottom: 100px;

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

  button {
  width: 200px;
  padding: 12px 16px;
  margin: 10px 0;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

  .clock-in-button {
    background-color: #4caf50;
    margin: 5px;
    width: 300px;
    height: 80px;
    font-size: 30px;
    
    @media (max-width: 768px) {
      width: 200px;
      font-size: 16px;
      padding: 12px 18px;
    }

    @media (max-width: 480px) {
      width: 150px;
      font-size: 14px;
      padding: 10px 16px;
    }
  }

  .clock-in-button:hover {
    background-color: #45a045;
  }

  .clock-out-button {
    background-color: #f44336;
    margin: 5px;
    width: 300px;
    height: 80px;
    font-size: 30px;

    @media (max-width: 768px) {
      width: 200px;
      font-size: 16px;
      padding: 12px 18px;
    }

    @media (max-width: 480px) {
      width: 150px;
      font-size: 14px;
      padding: 10px 16px;
    }
  }

  .clock-out-button:hover {
    background-color: #d32f2f;
  }
`;