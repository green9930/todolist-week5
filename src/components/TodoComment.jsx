import { useState } from 'react';
import styled from 'styled-components';
import TodoCommentForm from 'components/TodoCommentForm';
import TodoCommentList from 'components/TodoCommentList';
import { colors } from 'theme/theme';

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
  max-width: 1152px;
  height: 520px;
  position: fixed;
  width: 100%;
  bottom: 0%;
  left: 50%;
  border: 3px solid ${colors.orange};
  border-radius: 10px 10px 0 0;
  transform: translate(-50%, 0%);
  transform: ${({ isShow }) => (isShow ? '' : `translate(-50%, 82%)`)};
  transition: all 600ms cubic-bezier(0.8, 0, 0.1, 1);
  background-color: ${colors.white};
  overflow: auto;
`;

const TodoCommentWrapper = styled.div`
  padding: 10px 30px;
`;

const StyledShowBtn = styled.div`
  padding: 30px;
`;
