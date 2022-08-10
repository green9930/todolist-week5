import { configureStore } from '@reduxjs/toolkit';
import todosSlice from 'redux/modules/todosSlice';
import commentsSlice from 'redux/modules/commentsSlice';

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    comments: commentsSlice.reducer,
  },
});

export default store;
