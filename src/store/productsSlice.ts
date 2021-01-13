// Imports
// Redux toolkit imports
import { createSlice } from "@reduxjs/toolkit";
// Initial state imports
import { InitialState } from './initialState';

// Product Slice
export const productsSlice = createSlice({
    name: "Products",
    initialState: InitialState,
    reducers: {
        add: (state, action) => {
          // add item
        }
      }
});

// Actions Exports
export const {add} = productsSlice.actions;