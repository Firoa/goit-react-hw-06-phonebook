import * as actions from './actions';
import { createReducer } from '@reduxjs/toolkit';

export const contacts = createReducer([], {
  [actions.addContact.type]: (state, action) => {
    if (!state.find(contact => contact.name === action.payload.name)) {
      return [...state, action.payload];
    }
    return state;
  },
  [actions.deleteContact.type]: (state, action) => {
    const filtredContacts = state.filter(
      contact => contact.id !== action.payload,
    );
    return [...filtredContacts];
  },
  [actions.writeToLS.type]: (state, action) => {
    localStorage.setItem('contacts', JSON.stringify(state));
    return state;
  },
  [actions.readFromLS]: (state, action) => {
    return [...action.payload];
  },
});

export const filter = createReducer('', {
  [actions.onChangeFilter.type]: (state, action) => action.payload,
});
