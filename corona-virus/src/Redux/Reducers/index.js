import { combineReducers } from 'redux';

import covidDataSummary from './dataCovidReducer';

const RootReducers = combineReducers({ covidDataSummary });

export default RootReducers;
