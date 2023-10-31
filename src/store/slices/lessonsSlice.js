import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import data from '../../data.json';

const initialState = {
  course: {},
  userAnswers: [],
  lessons: [],
  questions: [],
  question: {},
  currentUserAnswer: [],
  isFetching: false,
  isLoading: false,
};

export const fetchCourse = createAsyncThunk('lessons/fetch', async (_, thunkAPI) => {
  const { course } = data;
  return course;
});

const lessonsSlice = createSlice({
  name: 'lessons',
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    setQuestion: (state, action) => {
      state.question = action.payload.question;
    },
    setCurrentUserAnswer: (state, action) => {
      state.currentUserAnswer = action.payload;
    },
    setUserAnswers: (state, action) => {
      state.userAnswers = action.payload;
    },
    replaceUserAnswers: (state, action) => {
      const { index, newAnswer } = action.payload;
      state.userAnswers[index] = newAnswer;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(fetchCourse.pending, (state) => {
      state.isFetching = true;
    });
    addCase(fetchCourse.fulfilled, (state, action) => {
      state.course = action.payload;
      state.lessons = state.course.lessons;
      state.isFetching = false;
    });
  },
});

export const {
  setQuestions,
  setQuestion,
  setCurrentUserAnswer,
  setUserAnswers,
  replaceUserAnswers,
  setIsLoading,
} = lessonsSlice.actions;
export default lessonsSlice.reducer;
