import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const { REACT_APP_AXOIS_BASE_URL, REACT_APP_HEROKU_BASE_URL } = process.env;

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

export const __createTodos = createAsyncThunk(
  'createTodos',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(
        `${REACT_APP_HEROKU_BASE_URL}/todos`,
        payload
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __readTodos = createAsyncThunk(
  'readTodos',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${REACT_APP_HEROKU_BASE_URL}/todos`);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateTodos = createAsyncThunk(
  'updateTodos',
  async (payload, thunkAPI) => {
    try {
      await axios.patch(`${REACT_APP_HEROKU_BASE_URL}/todos/${payload.id}`, {
        content: payload.content,
      });
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteTodos = createAsyncThunk(
  'deleteTodos',
  async (payload, thunkAPI) => {
    try {
      await axios.delete(
        `${REACT_APP_HEROKU_BASE_URL}/todos/${payload}`,
        payload
      );
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
    [__createTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__createTodos.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.todos.push(payload);
    },
    [__createTodos.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [__readTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__readTodos.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.todos = payload;
    },
    [__readTodos.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [__updateTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateTodos.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.todos = state.todos.map((todo) =>
        todo.id === payload.id ? { ...todo, content: payload.content } : todo
      );
    },
    [__updateTodos.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [__deleteTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteTodos.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
    [__deleteTodos.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default todosSlice;
