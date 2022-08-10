import Button from 'components/elements/Button';
import styled from 'styled-components';
import TodoContent from 'components/TodoContent';

const TodoViewer = ({ todo, handleIsEdit }) => {
  return (
    <TodoViewerContainer>
      <TodoContent todo={todo} />
      <ButtonContainer>
        <Button size="large" clickHandler={handleIsEdit}>
          수정하기
        </Button>
      </ButtonContainer>
    </TodoViewerContainer>
  );
};

export default TodoViewer;

const TodoViewerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 24px;
`;

const ButtonContainer = styled.div`
  margin: 20px;
  padding: 0 30%;
`;
