import styled from 'styled-components';
import Todo from 'components/Todo';
import Loading from 'components/Loading';

function TodoList() {
  return (
    <div>
      {/* {isLoading ? ( */}
      {/* <Loading /> */}
      {/* ) : ( */}
      <>
        <TodoListTitle>내 할일</TodoListTitle>
        <ListArray>
          {/* todos.map() */}
          <Todo />
        </ListArray>
      </>
      {/* )} */}
    </div>
  );
}

export default TodoList;

const TodoListTitle = styled.h1`
  font-size: 32px;
  margin: 30px 20px;
`;

const ListArray = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
