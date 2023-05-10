import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'
import { combineReducers } from 'redux';

const store = configureStore ( {reducer: rootReducer});

export default store;
