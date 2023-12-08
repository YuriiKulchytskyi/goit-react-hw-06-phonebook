import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (name, number) => {
        return {
          payload: {
            id: nanoid(),
            name: name.trim(),
            number: number.trim(),
          },
        };
      },
    },

    deleteContact: (state, action) => {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },

    deleteAllContacts: state => {
      state.splice(0, state.length);
    },
  },
});

export const { addContact, deleteContact, deleteAllContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
