import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const { REACT_APP_COMMENTS_URL } = process.env;

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const __createComments = createAsyncThunk(
  'createComments',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(REACT_APP_COMMENTS_URL, payload);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __readComments = createAsyncThunk(
  'readComments',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(REACT_APP_COMMENTS_URL);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __deleteComments = createAsyncThunk(
  'deleteComments',
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`${REACT_APP_COMMENTS_URL}/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateComments = createAsyncThunk(
  'updateComments',
  async (payload, thunkAPI) => {
    try {
      await axios.patch(`${REACT_APP_COMMENTS_URL}/${payload.id}`, {
        commentText: payload.commentText,
      });
      return thunkAPI.fulfillWithValue(payload);
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
    [__createComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__createComments.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.comments.push(payload);
      console.log('POST COMMENTS', payload);
    },
    [__createComments.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [__readComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__readComments.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.comments = payload;
      console.log('GET COMMENTS', payload);
    },
    [__readComments.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [__updateComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateComments.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.comments = state.comments.map((comment) =>
        comment.id === payload.id
          ? { ...comment, commentText: payload.commentText }
          : comment
      );
      console.log('POST COMMENTS', payload);
    },
    [__updateComments.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [__deleteComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComments.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.comments = state.comments.filter(
        (comment) => comment.id !== payload
      );
      console.log('DELETE COMMENTS', payload);
    },
    [__deleteComments.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default commentsSlice;
