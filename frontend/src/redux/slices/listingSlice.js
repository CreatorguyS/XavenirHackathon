// src/redux/slices/listingsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const listingsSlice = createSlice({
  name: 'listings',
  initialState: {
    listings: [],        // Array of food listings
    notifications: []    // Array of notifications
  },
  reducers: {
    setListings: (state, action) => {
      state.listings = action.payload;
    },
    addNotification: (state, action) => {
      state.notifications.push(action.payload);
    }
  }
});

export const { setListings, addNotification } = listingsSlice.actions;
export default listingsSlice.reducer;