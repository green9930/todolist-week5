import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Todo from 'components/Todo';
import Loading from 'components/Loading';
import ErrorMessage from 'components/ErrorMessage';
import { __readTodos } from 'redux/modules/todosSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, isLoading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(__readTodos());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage error={error.message} />;
  }

  return (
    <div>
      <TodoListTitle>내 할일</TodoListTitle>
      <ListArray>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ListArray>
    </div>
  );
};

export default TodoList;

const TodoListTitle = styled.h1`
  margin: 30px 20px;
  font-size: 32px;
`;

const ListArray = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
