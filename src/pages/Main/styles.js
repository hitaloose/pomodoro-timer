import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 390px;
  width: 200px;
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #ffd4c5;
  border: none;
  border-radius: 50%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: background 0.3s;

  &:hover {
    background: ${darken('0.2', '#ffd4c5')};
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 30px;
`;

export const Text = styled.p`
  font-size: 60px;
  color: #333;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
