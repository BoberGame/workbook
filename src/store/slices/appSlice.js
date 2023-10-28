import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  initialized: false,
};

const lessonsSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

// export const { setInitialized } = lessonsSlice.actions;
export default lessonsSlice.reducer;
