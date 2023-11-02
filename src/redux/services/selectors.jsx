import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter;

export const selectVisibleItems = createSelector(
  [selectFilter],
  (items, { filter }) => {

    return items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);