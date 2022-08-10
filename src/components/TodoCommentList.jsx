import Comment from 'components/Comment';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __readComments } from 'redux/modules/commentsSlice';
import styled from 'styled-components';
import Loading from 'components/Loading';

const TodoCommentList = ({ targetId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__readComments());
  }, [dispatch]);

  const commentList = useSelector((state) => state.comments);
  const { comments, isLoading, error } = commentList;

  return (
    <TodoCommentListContainer>
      {isLoading ? (
        <Loading />
      ) : (
        comments
          .filter((val) => val.todoId === targetId)
          .map((comment) => <Comment comment={comment} />)
      )}
    </TodoCommentListContainer>
  );
};

export default TodoCommentList;

const TodoCommentListContainer = styled.div`
  overflow: auto;
`;
