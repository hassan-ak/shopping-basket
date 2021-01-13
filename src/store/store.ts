// Imports
// Redux tollkit imports
import {configureStore} from '@reduxjs/toolkit'
// Product slice imports
import {productsSlice} from './productsSlice'

// Configure store
export const store = configureStore({ reducer: productsSlice.reducer })