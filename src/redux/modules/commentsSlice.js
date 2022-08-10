import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const __createComments = createAsyncThunk(
  'postComments',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(
        'http://localhost:3001/comments',
        payload
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __readComments = createAsyncThunk(
  'getComments',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:3001/comments');
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentsSlice = createSlice({
  name: 'commentsSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [__createComments.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__createComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments.push(action.payload);
      console.log('POST COMMENTS', action);
    },
    [__createComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__readComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__readComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
      console.log('GET COMMENTS', action);
    },
    [__readComments.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default commentsSlice;
