import {
  REQUEST_DATA,
  GET_DATA,
  FAILED_REQUEST,
} from '../Actions/fetchCountriesAction';

const INITIAL_STATE = {
  countries: [],
  erro: '',
};

function handleCountriesData(state = INITIAL_STATE, { type, countriesData, error } = {}) {
  switch (type) {
    case REQUEST_DATA:
      return { ...state };
    case GET_DATA:
      return { ...state, countries: countriesData };
    case FAILED_REQUEST:
      return { ...state, error };
    default:
      return state;
  }
}

export default handleCountriesData;
