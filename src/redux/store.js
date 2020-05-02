import { configureStore } from '@reduxjs/toolkit';
import * as Reducers from './reducer';

const store = configureStore({
  reducer: {
    contacts: Reducers.contacts,
    filter: Reducers.filter,
  },
});
export default store;
