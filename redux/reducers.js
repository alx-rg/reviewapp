import { combineReducers } from 'redux';

const initialState = {
  reviews: [],
};

const reviewsReducer = (state = initialState.reviews, action) => {
  switch (action.type) {
    case 'ADD_REVIEW':
      return [...state, action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  reviews: reviewsReducer,
});

export default rootReducer;
