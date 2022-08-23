import { configureStore } from 'redux';

import { composeWithDevTools } from '@redux-devtools/extension';

import RootReducers from '../Reducers';

const store = configureStore(RootReducers, composeWithDevTools());

export default store;
