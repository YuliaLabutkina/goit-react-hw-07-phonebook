import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import tasksActions from './phonebook-action';

const fetchContact = (_, { payload }) => {
  return [...payload];
};

const addContact = (state, { payload }) => {
  return [...state, payload];
};

const removeContact = (state, { payload }) => {
  return state.filter(({ id }) => id !== payload);
};

const items = createReducer([], {
  [tasksActions.fetchContactSuccess]: fetchContact,
  [tasksActions.addContactSuccess]: addContact,
  [tasksActions.removeContactSuccess]: removeContact,
});

const filter = createReducer('', {
  [tasksActions.filterContact.type]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [tasksActions.fetchContactRequest]: () => true,
  [tasksActions.fetchContactSuccess]: () => false,
  [tasksActions.fetchContactError]: () => false,

  [tasksActions.addContactRequest]: () => true,
  [tasksActions.addContactSuccess]: () => false,
  [tasksActions.addContactError]: () => false,

  [tasksActions.removeContactRequest]: () => true,
  [tasksActions.removeContactSuccess]: () => false,
  [tasksActions.removeContactError]: () => false,
});

const error = createReducer(false, {
  [tasksActions.fetchContactRequest]: () => false,
  [tasksActions.fetchContactSuccess]: () => false,
  [tasksActions.fetchContactError]: () => true,

  [tasksActions.addContactRequest]: () => false,
  [tasksActions.addContactSuccess]: () => false,
  [tasksActions.addContactError]: () => true,

  [tasksActions.removeContactRequest]: () => false,
  [tasksActions.removeContactSuccess]: () => false,
  [tasksActions.removeContactError]: () => true,
});

const phonebookReducer = combineReducers({
  items,
  filter,
  loading,
  error,
});

export default phonebookReducer;
