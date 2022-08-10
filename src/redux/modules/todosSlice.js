import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

export const __createTodos = createAsyncThunk(
  'postTodos',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:3001/todos', payload);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __readTodos = createAsyncThunk(
  'getTodos',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:3001/todos');
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteTodos = createAsyncThunk(
  'deleteTodos',
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3001/todos/${payload}`, payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateTodos = createAsyncThunk(
  "updateTodos",
  async (payload, thunkAPI) => {
    try {
      await axios.patch(`http://localhost:3001/todos/${payload.id}`, {
        content: payload.content,
      });
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const todosSlice = createSlice({
  name: 'todosSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [__createTodos.pending]: (state, action) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩 상태를 true로 변경
    },
    [__createTodos.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청 끝났으므로 false로 변경
      console.log(state)
      state.todos.push(action.payload); // Promise가 fullfilled일 때 dispatch
      console.log('POST TODOS', action);
    },
    [__createTodos.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했으나 네트워크 요청은 끝났으므로 false로 변경
      state.error = action.payload; // catch된 error를 state.error에 넣는다.
    },
    [__readTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__readTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
      console.log('GET TODOS', action);
    },
    [__readTodos.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [__deleteTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.todos = action.payload;
      console.log('Delete TODOS', state.todos);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    [__deleteTodos.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [__updateTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateTodos.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      console.log('Update TODOS', action);
      state.todos = state.todos.map((todo) =>
        todo.id === payload.id ? { ...todo, content: payload.content } : todo);
    },
  },
  [__updateTodos.rejected]: (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
  },


},
);

export default todosSlice;
