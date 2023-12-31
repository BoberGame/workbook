import { createSlice } from '@reduxjs/toolkit';
import { AUTH_STORAGE_KEY } from '../../constants';

const initialState = {
  isAuth: false,
  userData: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.isAuth = true;
      state.userData = action.payload.userData;
    },
    signIn: (state, action) => {
      state.isAuth = true;
      state.userData = action.payload.userData;
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(state.userData));
    },
    signOut: (state) => {
      state.isAuth = false;
      state.userData = {};
      localStorage.removeItem(AUTH_STORAGE_KEY);
    },
  },
});

export const { reducer: authReducer, actions: authActions } = authSlice;
