import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #e54334;

  height: 50px;
  width: 80%;
  padding: 0 15px;

  border-radius: 15px;
  border: 0;

  font-weight: 500;
  color: #eff2f5;
  font-size: 20px;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#e54334')};
  }
`;
