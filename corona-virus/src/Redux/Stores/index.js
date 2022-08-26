import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { composeWithDevTools } from '@redux-devtools/extension';

import RootReducers from '../Reducers';

const store = configureStore(
  { reducer: RootReducers },
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
