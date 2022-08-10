import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import TodoTextarea from 'components/elements/TodoTextarea';
import Button from './elements/Button';
import useInput from 'hooks/useInput';
import { __updateTodos ,__readTodos} from 'redux/modules/todosSlice';

const TodoEditor = ({ handleIsEdit, todo }) => {
  const [textContent, getChangedTextContent] = useInput();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleIsEdit();
    handleUpdate();
  };

  const handleUpdate = () => {
    dispatch(__updateTodos({ id :todo.id , content :textContent }))
    dispatch(__readTodos())
  }


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
