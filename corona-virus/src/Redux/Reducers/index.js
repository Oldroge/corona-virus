import { combineReducers } from 'redux';

import covidDataSummary from './dataReducer';

const RootReducers = combineReducers({ covidDataSummary });

export default RootReducers;
