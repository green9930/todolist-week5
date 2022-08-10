import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from 'components/elements/Button';

const CommentViewer = ({ comment, handleToggleCommentEditor }) => {
  const dispatch = useDispatch();
  const { todoId, name, commentText, id } = comment;

  const handleDeleteComment = () => {};

  return (
    <>
      <CommentWrapper>
        <span>{name}</span>
        <span>{commentText}</span>
      </CommentWrapper>
      <CommentBtnWrapper>
        <Button variant="revise" clickHandler={handleToggleCommentEditor}>
          수정
        </Button>
        <Button variant="delete" clickHandler={handleDeleteComment}>
          삭제
        </Button>
      </CommentBtnWrapper>
    </>
  );
};

export default CommentViewer;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentBtnWrapper = styled.div`
  display: flex;

  button {
    margin-right: 10px;
  }
`;
