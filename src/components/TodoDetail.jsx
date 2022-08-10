import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import TodoComment from 'components/TodoComment';
import TodoEditor from 'components/TodoEditor';
import Loading from 'components/Loading';
import ErrorMessage from 'components/ErrorMessage';
import TodoViewer from 'components/TodoViewer';
import { __readTodos } from 'redux/modules/todosSlice';

const TodoDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isEdit, setIsEdit] = useState(false);

  const { todos, isLoading, error } = useSelector((state) => state.todos);
  const todo = todos.find((todo) => todo.id === parseInt(id));

  useEffect(() => {
    dispatch(__readTodos());
  }, [dispatch]);

  const handleIsEdit = () => setIsEdit(!isEdit);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage error={error.message} />;
  }

  return (
    <>
      {todo ? (
        <TodoDetailContainer>
          {isEdit ? (
            <TodoEditor todo={todo} handleIsEdit={handleIsEdit} />
          ) : (
            <TodoViewer todo={todo} handleIsEdit={handleIsEdit} />
          )}
          {!isEdit && <TodoComment todoId={todo.id} />}
        </TodoDetailContainer>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default TodoDetail;

const TodoDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  justify-content: center;
  width: 100%;
`;
