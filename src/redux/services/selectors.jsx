import { createSelector } from "@reduxjs/toolkit";

export const selectCardItems = (state) => state.items;

export const selectFilter = (state) => state.filter;

export const selectVisibleItems = createSelector(
  [selectCardItems, selectFilter],
  ({items}, { filter }) => {
    if (filter !== "") {
      return items.filter((item) =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return items;
    }
  }
);
