import { createSlice } from '@reduxjs/toolkit';
import items from "../../assets/data.json";

const cardsSlice = createSlice({
    name: 'items',
    initialState:
    {
      items: items,
    },
    reducers: {
      setItems: (state, {payload}) => {
        state.items = payload;
      },
    },
  });
  
  export const cardsReducer = cardsSlice.reducer;
  export const { setItems } = cardsSlice.actions;