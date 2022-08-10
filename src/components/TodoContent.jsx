import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'theme/theme';

const TodoContent = ({ todo }) => {
  const { id, title, content } = todo;

  return (
    <div>
      <TodoIdContainer>
        <StyledTodoId>{`id: (${id})`}</StyledTodoId>
        <Link to="/todos">이전으로</Link>
      </TodoIdContainer>
      <TodoContainer>
        <h2>{title}</h2>
        <TodoContentContainer>
          <div>
            <span>{content}</span>
          </div>
        </TodoContentContainer>
      </TodoContainer>
    </div>
  );
};

export default TodoContent;

const TodoIdContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;

const TodoContainer = styled.div`
  min-height: 220px;
  padding: 20px 25px;
  border-radius: 10px;
  background-color: ${colors.lightGreen};
`;

const StyledTodoId = styled.span`
  font-size: 24px;
`;

const TodoContentContainer = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-top: 50px;

  div {
    padding: 10px;
  }
`;
