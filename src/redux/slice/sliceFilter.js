import { createSlice } from '@reduxjs/toolkit';

export const sliceFilter = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    filterContact(_, action) {
      return action.payload;
    },
  },
});
export const { filterContact } = sliceFilter.actions;
