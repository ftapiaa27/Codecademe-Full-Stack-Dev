// Import createStore and combineReducers here.
import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// Import the slice reducers here.
import { cartReducer } from '../features/cart/cartSlice';
import { inventoryReducer } from '../features/inventory/inventorySlice';
import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice';


//DEPRECATED VERSION
// export const store = createStore(combineReducers({
//     cart: cartReducer,
//     inventory: inventoryReducer,
//     currencyFilter: currencyFilterReducer,
//     searchTerm: searchTermReducer
// }))

//UPDATED VERSION
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        inventory: inventoryReducer,
        currencyFilter: currencyFilterReducer,
        searchTerm: searchTermReducer
    }
})