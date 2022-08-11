import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Input from 'components/elements/Input';
import TodoTextarea from 'components/elements/TodoTextarea';
import Button from 'components/elements/Button';
import { __createTodos } from 'redux/modules/todosSlice';
import useInput from 'hooks/useInput';
import formValidator from 'utils/formValidator';
import { colors } from 'theme/theme';

const TodoForm = () => {
  const [inputName, getChangedName] = useInput('');
  const [inputTitle, getChangeTitle] = useInput('');
  const [inputContent, getChangedContnet] = useInput('');
  /* ALERT MESSAGE ------------------------------------------------------------ */
  const [nameAlert, setNameAlert] = useState('');
  const [titleAlert, setTitleAlert] = useState('');
  const [contentAlert, setContentAlert] = useState('');
  /* VERIFY ------------------------------------------------------------------- */
  const [isVerified, setIsVerified] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameResult = formValidator(e.target[0].name, inputName);
    const titleResult = formValidator(e.target[1].name, inputTitle);
    const contentResult = formValidator(e.target[2].name, inputContent);

    nameResult.verify &&
      titleResult.verify &&
      contentResult.verify &&
      setIsVerified(true);

    if (isVerified) {
      dispatch(
        __createTodos({
          name: inputName,
          title: inputTitle,
          content: inputContent,
        })
      );

      setNameAlert('');
      setTitleAlert('');
      setContentAlert('');
      navigate('/todos');
    } else {
      setNameAlert(nameResult.message);
      setTitleAlert(titleResult.message);
      setContentAlert(contentResult.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextContainer>
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
          placeholder="제목을 입력해주세요 (30자 이내)"
          labelText="제목"
          name="title"
          value={inputTitle}
          changeHandler={getChangeTitle}
          maxLength="30"
          minLength="1"
        />
        <TodoTextarea
          todoLabel="내용"
          name="content"
          value={inputContent}
          changeHandler={getChangedContnet}
          maxLength="200"
          minLength="1"
        />
      </TextContainer>
      <ButtonContainer>
        <Button size="large" type="submit">
          추가하기
        </Button>
        <AlertMessageContainer>
          <span>{nameAlert}</span>
          <span>{titleAlert}</span>
          <span>{contentAlert}</span>
        </AlertMessageContainer>
      </ButtonContainer>
    </form>
  );
};

export default TodoForm;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  padding-left: 5%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 0 30%;
`;

const AlertMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  span {
    color: ${colors.red};
    font-weight: 600;
  }
`;
