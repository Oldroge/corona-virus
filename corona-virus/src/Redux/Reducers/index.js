import { combineReducers } from 'redux';

import covidDataSummary from './dataCovidReducer';
import dataCountriesReducer from './dataCountriesReducer';

const RootReducers = combineReducers({
  covidDataSummary,
  dataCountriesReducer,
});

export default RootReducers;
