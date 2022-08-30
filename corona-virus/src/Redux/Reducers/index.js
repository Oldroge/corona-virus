import { combineReducers } from 'redux';

import covidDataSummary from './dataCovidReducer';
import dataCountriesReducer from './dataCountriesReducer';
import covidDataByCountry from './dataCovidByCountryReducer';

const RootReducers = combineReducers({
  covidDataSummary,
  dataCountriesReducer,
  covidDataByCountry,
});

export default RootReducers;
