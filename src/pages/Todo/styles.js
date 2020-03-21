import styled from 'styled-components';
import { MdAdd, MdClose } from 'react-icons/md';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  overflow: hidden;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const ButtonContainer = styled.button`
  border-radius: 50%;
  position: absolute;
  right: 10px;
  border: none;
  background: none;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddButton = styled(MdAdd).attrs({
  color: '#333',
  size: 26,
})`
  border-radius: 50%;
  transition: background 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const Input = styled.input`
  font-family: 'Roboto', sans-serif;
  color: #333;
  width: 100%;

  border: none;

  border-top: 1px solid #ffd4c5;
  border-bottom: 1px solid #ffd4c5;

  padding: 10px 46px 10px 10px;
`;

export const TodosContainer = styled.div`
  width: 100%;
  height: 100%;

  overflow: auto;

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: #ffd4c5;
  }
`;

export const TodoContainer = styled.div`
  padding: 5px 10px;
  margin: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.06), 0 3px 6px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  position: relative;

  display: flex;
  align-items: center;
`;

export const TodoText = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #333;
`;

export const CloseButton = styled(MdClose).attrs({
  color: '#333',
  size: 18,
})`
  border-radius: 50%;
  position: absolute;
  right: 10px;
  transition: background 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
