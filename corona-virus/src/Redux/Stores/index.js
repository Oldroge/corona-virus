import { createStore } from 'redux';

import { composeWithDevTools } from '@redux-devtools/extension';

import RootReducers from '../Reducers';

const store = createStore(RootReducers, composeWithDevTools());

export default store;
