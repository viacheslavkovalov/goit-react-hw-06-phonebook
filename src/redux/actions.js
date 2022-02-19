import { createAction, nanoid } from '@reduxjs/toolkit';

const addContact = createAction('items/addContact', contact => {
  return {
    payload: {
      id: nanoid(),
      ...contact,
    },
  };
});

const deleteContact = createAction('items/deleteContact');
const changeFilter = createAction('items/filter');

export { addContact, deleteContact, changeFilter };
