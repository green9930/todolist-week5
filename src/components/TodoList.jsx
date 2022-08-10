import styled from 'styled-components';
import Todo from 'components/Todo';
import { useDispatch, useSelector } from 'react-redux';
import Loading from 'components/Loading';
import { useEffect, useState } from 'react';
import { __readTodos } from 'redux/modules/todosSlice';
import ErrorMessage from 'components/ErrorMessage';

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();
  const [isLoading , setIsLoading] = useState(true);
  
  // const handLoadingEdit = () => setIsLoading(!isLoading);

  useEffect(() => {
    dispatch(__readTodos());
  }, [dispatch]);

  console.log(todos);

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
  font-size: 32px;
  margin: 30px 20px;
`;

const ListArray = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
