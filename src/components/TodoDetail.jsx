import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'components/elements/Button';
import TodoComment from 'components/TodoComment';
import TodoContent from 'components/TodoContent';
import TodoEditor from 'components/TodoEditor';
import { __readTodos } from 'redux/modules/todosSlice';

const TodoDetail = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__readTodos());
  }, [dispatch]);

  const { todos } = useSelector((state) => state.todos);
  const todo = todos.find((todo) => todo.id === parseInt(id));

  const handleIsEdit = () => setIsEdit(!isEdit);

  return (
    <TodoDetailContainer>
      {todo ? (
        <>
          {isEdit ? (
            <TodoEditor handleIsEdit={handleIsEdit} todo={todo} />
          ) : (
            <>
              <TodoContent todo={todo} />
              <Button size="large" clickHandler={handleIsEdit}>
                수정하기
              </Button>
            </>
          )}
          {!isEdit && <TodoComment todoId={todo.id} />}
        </>
      ) : (
        <div>loading...</div>
      )}
    </TodoDetailContainer>
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
