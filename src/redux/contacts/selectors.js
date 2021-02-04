import { createSelector } from "@reduxjs/toolkit";

export const getItems = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;

export const getFilteredContacts = createSelector(
  [getItems, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
