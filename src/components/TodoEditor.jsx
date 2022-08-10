import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from 'components/elements/Button';
import TodoTextarea from 'components/elements/TodoTextarea';
import { __updateTodos } from 'redux/modules/todosSlice';
import useInput from 'hooks/useInput';

const TodoEditor = ({ todo, handleIsEdit }) => {
  const dispatch = useDispatch();
  const [textContent, getChangedTextContent] = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textContent.trim() === '') return;
    dispatch(__updateTodos({ id: todo.id, content: textContent }));
    handleIsEdit();
  };

  return (
    <TodoEditorContainer>
      <LinkContainer onClick={handleIsEdit}>
        <span>이전으로</span>
      </LinkContainer>
      <form onSubmit={handleSubmit}>
        <TextareaContainer>
          <TodoTextarea
            defaultValue={todo.content}
            isHide={true}
            changeHandler={getChangedTextContent}
          />
        </TextareaContainer>
        <ButtonContainer>
          <Button children="저장하기" size="large" type="submit" />
        </ButtonContainer>
      </form>
    </TodoEditorContainer>
  );
};

export default TodoEditor;

const TodoEditorContainer = styled.div`
  margin: 40px;

  textarea {
    width: 100%;
  }
`;

const LinkContainer = styled.div`
  text-align: right;
  padding-bottom: 30px;
`;

const TextareaContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  margin: 20px;
  padding: 0 30%;
`;
