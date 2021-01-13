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
        return state.map(item => {
          if (item.id !== action.payload.id) {
            return item
          }
          return {
            ...item,
            added: true
          }
        })
      },
      remove: (state, action) => {
        return state.map(item => {
          if (item.id !== action.payload.id) {
            return item
          }
          return {
            ...item,
            added: false       
          }
        })
      },
      removeAll: (state) => {
        return state.map(item => {
          return {
            ...item,
            added: false
          }
        })
      },
    }
});

// Actions Exports
export const {add, remove, removeAll} = productsSlice.actions;