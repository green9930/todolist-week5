import { useState } from 'react';
import styled from 'styled-components';
import CommentEditor from 'components/CommentEditor';
import CommentViewer from 'components/CommentViewer';

const Comment = ({ comment }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleToggleCommentEditor = () => setIsEdit(!isEdit);

  return (
    <CommentContainer>
      {isEdit ? (
        <CommentEditor
          comment={comment}
          handleToggleCommentEditor={handleToggleCommentEditor}
        />
      ) : (
        <CommentViewer
          comment={comment}
          handleToggleCommentEditor={handleToggleCommentEditor}
        />
      )}
    </CommentContainer>
  );
};

export default Comment;

const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #9e9e9e;
  border-radius: 10px;
  padding: 12px;
`;
