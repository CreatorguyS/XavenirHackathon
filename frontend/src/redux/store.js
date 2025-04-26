// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authslice';
import listingsReducer from './slices/listingsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    listings: listingsReducer
  }
});

export default store;