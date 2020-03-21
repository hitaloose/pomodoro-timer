import React, { useState, useCallback, useRef, useEffect } from 'react';

import {
  Container,
  Input,
  InputContainer,
  ButtonContainer,
  AddButton,
  TodoContainer,
  TodoText,
  TodosContainer,
  CloseButton,
} from './styles';

export default function Todo() {
  /**
   * States
   */
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  /**
   * Refs
   */
  const newTodoRef = useRef(null);

  /**
   * Handles
   */
  const addTodo = useCallback(
    e => {
      e.preventDefault();
      if (!newTodo) {
        return;
      }
      setTodos(prev => [...prev, newTodo]);
      setNewTodo('');

      newTodoRef.current.focus();
    },
    [newTodo]
  );

  const removeTodo = useCallback(index => {
    setTodos(prev => [...prev.filter((item, i) => i !== index)]);
  }, []);

  /**
   * Effects
   */
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('todos'))) {
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  /**
   * Returns
   */
  return (
    <Container>
      <form onSubmit={addTodo}>
        <InputContainer>
          <Input
            placeholder="new todo"
            ref={newTodoRef}
            value={newTodo}
            onChange={e => setNewTodo(e.target.value)}
          />
          <ButtonContainer type="submit">
            <AddButton />
          </ButtonContainer>
        </InputContainer>
      </form>
      <TodosContainer>
        {todos.map((todo, index) => (
          <TodoContainer key={index}>
            <TodoText>{todo}</TodoText>
            <CloseButton onClick={() => removeTodo(index)} />
          </TodoContainer>
        ))}
      </TodosContainer>
    </Container>
  );
}
