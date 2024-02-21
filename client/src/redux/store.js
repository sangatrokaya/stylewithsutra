import { configureStore } from '@reduxjs/toolkit';
import countSlice from './reducerSlice/countSlice';
import boxSlice from './reducerSlice/boxSlice';
export default configureStore({
  reducer: {
    count: countSlice,
    box: boxSlice
  },
});