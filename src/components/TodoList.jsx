import styled from 'styled-components';
import Todo from 'components/Todo';
import { useDispatch,useSelector } from 'react-redux';
import {__readTodos} from "../redux/modules/todosSlice";
import React,{useEffect} from 'react';

function TodoList() {
  const dispatch = useDispatch();
  useEffect (()=>{
    dispatch(__readTodos());
  },[dispatch]);
  const {error,isLoading,todos} =useSelector((state)=>state.todos)

  if(isLoading){
    return <div>로딩 중...</div>
    }
  if(error){
    return <div>{error.message}</div>
    }
  return (
    <div>
      <>
        <TodoListTitle>내 할일</TodoListTitle>
        <ListArray>
          {todos.map((todo)=><Todo key={todo.id} todo={todo}/>)}
        </ListArray>
      </>
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
