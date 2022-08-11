import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'components/elements/Button';
import { __deleteTodos } from 'redux/modules/todosSlice';
import { colors } from 'theme/theme';



function Todo({ todo }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { title, name, id } = todo;

  const handleDelete = () => {
    dispatch(__deleteTodos(id));
  };


  return (
    <div>
      <TodoLists>
        <TodoInfoContainer onClick={() => navigate(`${id}`)}>
          <TodoListTitle>{title}</TodoListTitle>
          <TodoListWriter>{name}</TodoListWriter>
        </TodoInfoContainer>
        <ButtonCotainer>
          <Button variant="delete" clickHandler={handleDelete} />
        </ButtonCotainer>
      </TodoLists>
    </div>
  );
}

export default Todo;

const TodoLists = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 90px;
  border: 1px solid ${colors.lightGray};
  border-radius: 12px;
  margin: 0px auto;
  gap: 15px;
`;

const TodoInfoContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

const TodoListTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

const TodoListWriter = styled.p`
  font-size: 10px;
`;

const ButtonCotainer = styled.div`
  padding: 20px;
`;
