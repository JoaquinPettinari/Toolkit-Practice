import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import seekerSlice from '../features/Seeker/seekerSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    seeker: seekerSlice
  },
});
