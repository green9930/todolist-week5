import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Input from 'components/elements/Input';
import Button from 'components/elements/Button';
import { __updateComments } from 'redux/modules/commentsSlice';
import useInput from 'hooks/useInput';

const CommentEditor = ({ comment, handleToggleCommentEditor }) => {
  const dispatch = useDispatch();

  const [newComment, setNewComment, commentReset] = useInput('');

  const { todoId, name, commentText, id } = comment;

  const handleUpdateComment = () => {
    dispatch(__updateComments({ id: id, commentText: newComment }));
    commentReset();
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
          width="500px"
        />
      </CommentEditorWrapper>
      <CommentBtnWrapper>
        <Button variant="normal" clickHandler={handleToggleCommentEditor}>
          취소
        </Button>
        <Button variant="normal" clickHandler={handleUpdateComment}>
          저장
        </Button>
      </CommentBtnWrapper>
    </>
  );
};

export default CommentEditor;

const CommentEditorWrapper = styled.div`
  margin-left: -15px;
`;

const CommentBtnWrapper = styled.div`
  display: flex;
  gap: 12px;
`;
