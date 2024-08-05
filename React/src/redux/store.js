import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {userReducer} from "./slices/userSlice.js";

// Initial state
const initialState = {
  userInfo: {},
};

// Reducer
const numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RESPONSE':
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(numberReducer);

export default store;
