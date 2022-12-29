import { createSlice } from '@reduxjs/toolkit';

export const sliceContact = createSlice({
  name: 'contact',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    removeContact(state, action) {
      state.filter(evt => evt.id !== action.payload);
    },
  },
});
export const { addContact, removeContact } = sliceContact.actions;
