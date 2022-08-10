import Input from 'components/elements/Input';
import useInput from 'hooks/useInput';
import { useDispatch } from 'react-redux';
import { __createComments } from 'redux/modules/commentsSlice';
import styled from 'styled-components';

const TodoCommentForm = ({ todoId }) => {
  const [inputCommentName, getChangedCommentName, resetName] = useInput('');
  const [inputComment, getChangedComment, resetComment] = useInput('');

  const dispatch = useDispatch();

  const handleSubmitComment = (e) => {
    e.preventDefault();
    dispatch(
      __createComments({
        todoId: todoId,
        name: inputCommentName,
        commentText: inputComment,
      })
    );

    resetName();
    resetComment();
  };

  return (
    <TodoCommentFormContainer>
      <form onSubmit={handleSubmitComment}>
        <NameContainer>
          <Input
            value={inputCommentName}
            id="commentName"
            name="commentName"
            placeholder="이름(1~5자)"
            width="100%"
            labelText="이름"
            isHide={true}
            changeHandler={getChangedCommentName}
          />
        </NameContainer>
      </form>
    </TodoCommentFormContainer>
  );
};

export default TodoCommentForm;

const TodoCommentFormContainer = styled.div`
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 24px;

    input {
      width: 100%;
    }
  }
`;

const NameContainer = styled.div`
  width: 150px;
`;
