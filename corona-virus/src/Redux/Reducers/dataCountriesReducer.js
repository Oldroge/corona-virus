import {
  REQUEST_DATA,
  GET_DATA,
  FAILED_REQUEST,
} from '../Actions/fetchCountriesAction';

const INITIAL_STATE = {
  countries: [],
  erro: '',
  loading: false,
};

function handleCountriesData(state = INITIAL_STATE, { type, countriesData, error } = {}) {
  switch (type) {
    case REQUEST_DATA:
      return { ...state, loading: true };
    case GET_DATA:
      return { ...state, countries: countriesData, loading: false };
    case FAILED_REQUEST:
      return { ...state, error, loading: false };
    default:
      return state;
  }
}

export default handleCountriesData;
