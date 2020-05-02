import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction('contacts/addContacts');
export const deleteContact = createAction('contacts/deleteContact');
export const onChangeFilter = createAction('contacts/onChangeFilter');
export const writeToLS = createAction('contacts/writeToLS');  
export const readFromLS = createAction('contacts/readFromLS');  


