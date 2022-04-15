import { configureStore } from '@reduxjs/toolkit';
import docsReducer from '../slices/docs';

const store = configureStore({
  reducer: {
    docs: docsReducer,
  },
});

export default store;
