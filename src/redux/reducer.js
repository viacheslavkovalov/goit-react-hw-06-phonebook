import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { addContact, deleteContact, changeFilter } from './actions';

const items = createReducer([], {
  //   [addContact]: (state, { payload }) => [...state, payload],
  [addContact]: (state, { payload }) => {
    const { name, number } = payload;
    if (
      state.find(contact => contact.name.toLowerCase()) === name.toLowerCase()
    ) {
      toast.error(`${name} is already in contacts`, {
        position: 'top-center',
        autoClose: 2000,
        theme: 'colored',
      });
    } else if (state.find(contact => contact.number === number)) {
      toast.error(`${number} is already used`, {
        position: 'top-center',
        autoClose: 2000,
        theme: 'colored',
      });
    } else return [...state, payload];
  },
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
