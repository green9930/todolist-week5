import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Input from 'components/elements/Input';
import Button from 'components/elements/Button';
import useInput from 'hooks/useInput';

const CommentEditor = ({ comment, handleToggleCommentEditor }) => {
  const { todoId, name, commentText, id } = comment;
  const [newComment, setNewComment, commentReset] = useInput('');

  const dispatch = useDispatch();

  const handleUpdateComment = () => {
    handleToggleCommentEditor();
  };

  return (
    <>
      <CommentEditorWrapper>
        <Input
          id="commentEditor"
          name="commentEditor"
          isHide={true}
          defaultValue={commentText}
          changeHandler={setNewComment}
        />
      </CommentEditorWrapper>
      <CommentBtnWrapper>
        <Button variant="revise" clickHandler={handleToggleCommentEditor}>
          취소
        </Button>
        <Button variant="revise" clickHandler={handleUpdateComment}>
          저장
        </Button>
      </CommentBtnWrapper>
    </>
  );
};

export default CommentEditor;

const CommentEditorWrapper = styled.div``;

const CommentBtnWrapper = styled.div`
  display: flex;

  button {
    margin-right: 10px;
  }
`;
