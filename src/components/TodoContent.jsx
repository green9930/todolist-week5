import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TodoContent = ({ todo }) => {
  const { id, title, content } = todo;

  return (
    <div>
      <TodoIdContainer>
        <StyledTodoId>{`id: (${id})`}</StyledTodoId>
        <Link to= '/todos' >이전으로</Link>
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
  margin-bottom: 32px;
  display:flex;
  justify-content:space-between;
`;

const TodoContainer = styled.div`
  background-color: #edffee;
  padding: 20px;
  border-radius: 10px;
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
