import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from 'components/elements/Button';
import { __deleteComments } from 'redux/modules/commentsSlice';

const CommentViewer = ({ comment, handleToggleCommentEditor }) => {
  const dispatch = useDispatch();

  const { name, commentText, id } = comment;

  const handleDeleteComment = () => {
    dispatch(__deleteComments(id));
  };

  return (
    <>
      <CommentWrapper>
        <StyledName>{name}</StyledName>
        <span>{commentText}</span>
      </CommentWrapper>
      <CommentBtnWrapper>
        <Button
          variant="revise"
          clickHandler={handleToggleCommentEditor}
          isVisible={false}
        >
          수정
        </Button>
        <Button
          variant="delete"
          clickHandler={handleDeleteComment}
          isVisible={false}
        >
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

const StyledName = styled.span`
  font-size: 11px;
`;

const CommentBtnWrapper = styled.div`
  display: flex;

  button {
    margin-right: 10px;
  }
`;
