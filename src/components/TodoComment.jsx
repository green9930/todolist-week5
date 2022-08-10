import { useState } from 'react';
import styled from 'styled-components';
import TodoCommentForm from './TodoCommentForm';
import TodoCommentList from './TodoCommentList';

const TodoComment = ({ todoId }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <TodoCommentContainer isShow={isShow}>
      <StyledShowBtn onClick={() => setIsShow(!isShow)}>
        <span>{isShow ? '눌러서 댓글 내리기' : '눌러서 댓글 보기'}</span>
      </StyledShowBtn>
      <TodoCommentWrapper>
        <TodoCommentForm todoId={todoId} />
        <TodoCommentList targetId={todoId} />
      </TodoCommentWrapper>
    </TodoCommentContainer>
  );
};

export default TodoComment;

const TodoCommentContainer = styled.div`
  border: 1px solid #c9c9c9;
  border-radius: 10px 10px 0 0;
  height: 400px;
  position: fixed;
  max-width: 1152px;
  width: 100%;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  transform: ${({ isShow }) => (isShow ? '' : `translate(-50%, 82%)`)};
  transition: all 600ms cubic-bezier(0.8, 0, 0.1, 1);
  overflow: auto;
`;

const TodoCommentWrapper = styled.div`
  padding: 24px;
`;

const StyledShowBtn = styled.div`
  padding: 24px;
`;
