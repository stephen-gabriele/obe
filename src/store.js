import {configureStore} from '@reduxjs/toolkit';
import charactersReducer from './charactersSlice';

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    appState: charactersReducer,
  },
});

export default store;
