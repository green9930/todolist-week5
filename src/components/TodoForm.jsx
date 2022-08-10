import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from 'components/elements/Input';
import TodoTextarea from 'components/elements/TodoTextarea';
import Button from 'components/elements/Button';
import { __createTodos } from 'redux/modules/todosSlice';
import useInput from 'hooks/useInput';

const TodoForm = () => {
  const [inputName, getChangedName] = useInput('');
  const [inputTitle, getChangeTitle] = useInput('');
  const [inputContent, getChangedContnet] = useInput('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      __createTodos({
        name: inputName,
        title: inputTitle,
        content: inputContent,
      })
    );

    navigate('/todos');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="todoWriter"
        placeholder="작성자의 이름을 입력해주세요(5자 이내)"
        labelText="이름"
        name="name"
        value={inputName}
        changeHandler={getChangedName}
        maxLength="5"
        minLength="1"
      />
      <Input
        id="todoTitle"
        placeholder="제목을 입력해주세요(50자 이내)"
        labelText="제목"
        name="title"
        value={inputTitle}
        changeHandler={getChangeTitle}
        minLength="1"
        maxLength="50"
      />
      <TodoTextarea
        todoLabel="내용"
        name="content"
        value={inputContent}
        changeHandler={getChangedContnet}
        minLength="2"
        maxLength="200"
      />
      <Button size="large" type="submit">
        추가하기
      </Button>
    </form>
  );
};

export default TodoForm;
