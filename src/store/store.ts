import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './settingsSlice'
export const store = configureStore({
  reducer: {
    settingsReducer
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;