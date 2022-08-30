import {
  REQUEST_DATA_BY_COUNTRY,
  GET_COVID_DATA_BY_COUNTRY,
  FAILED_REQUEST_BY_COUNTRY,
} from '../Actions/fetchCovidAction';

const INITIAL_STATE = {
  byCountries: [],
  error: '',
  loading: false,
};

function covidDataByCountry(state = INITIAL_STATE, { type, byCountries, error } = {}) {
  switch (type) {
    case REQUEST_DATA_BY_COUNTRY:
      return { ...state, loading: true };
    case GET_COVID_DATA_BY_COUNTRY:
      return { ...state, byCountries, loading: false };
    case FAILED_REQUEST_BY_COUNTRY:
      return { ...state, error, loading: false };
    default:
      return state;
  }
}

export default covidDataByCountry;
