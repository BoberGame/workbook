import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  initialized: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export const { reducer: appReducer, actions: appActions } = appSlice;
