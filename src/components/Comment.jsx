import { useState } from 'react';
import styled from 'styled-components';
import CommentEditor from 'components/CommentEditor';
import CommentViewer from 'components/CommentViewer';
import { colors } from 'theme/theme';

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
  height: 80px;
  border: 1px solid ${colors.orange};
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 12px 20px;
`;
