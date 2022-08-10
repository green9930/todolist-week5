import styled from 'styled-components';
import Todo from 'components/Todo';
import Loading from 'components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { __readTodos } from 'redux/modules/todosSlice';

function TodoList() {
  const todos = useSelector(state => state.todos.todos)
  const dispatch = useDispatch()
  const [isLoading , setLoding] = useState(true);
  
  // const handLoadingEdit = () => setLoding(!isLoading);

  useEffect(() => {
    dispatch(__readTodos());
  }, [dispatch]);

  console.log(todos)


  return (
    // <div>
    //   {isLoading ? (
    //    <Loading /> 
    //   ) : ( 
      <>
        <TodoListTitle>내 할일</TodoListTitle>
        <ListArray>
          {todos.map((todo)=><Todo key={todo.id} todo={todo}/>)}
        </ListArray>
      </>
       )}
//     </div>
//   );
// }

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
