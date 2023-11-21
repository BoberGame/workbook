import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './slices/appSlice.js';
import { lessonsReducer } from './slices/lessonsSlice.js';
import { authReducer } from './slices/authSlice.js';

const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    lessons: lessonsReducer,
  },
});

export default store;
