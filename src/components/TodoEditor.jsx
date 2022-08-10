import styled from 'styled-components';
import TodoTextarea from 'components/elements/TodoTextarea';
import Button from './elements/Button';
import useInput from 'hooks/useInput';
import { __readComments, __updateComments } from 'redux/modules/commentsSlice';

const TodoEditor = ({ handleIsEdit, todo }) => {
  const [textContent, getChangedTextContent] = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textContent.trim() === '') return;
    handleIsEdit();
  };

  return (
    <TodoEditorContainer>
      <form onSubmit={handleSubmit}>
        <TodoTextarea
          defaultValue={todo.content}
          isHide={true}
          changeHandler={getChangedTextContent}
        />
        <Button children="저장하기" size="large" type="submit" />
      </form>
    </TodoEditorContainer>
  );
};

export default TodoEditor;

const TodoEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 24px;
`;
