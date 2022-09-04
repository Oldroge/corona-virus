import { GET_COVID_DATA, FAILED_REQUEST, REQUEST_DATA } from '../Actions/fetchCovidAction';

const INITIAL_STATE = {
  countriesList: [],
  error: '',
  loading: false,
};

function covidDataSummary(state = INITIAL_STATE, { type, countries, error } = {}) {
  switch (type) {
    case REQUEST_DATA:
      return { ...state, loading: true };
    case GET_COVID_DATA:
      return {
        ...state,
        countriesList: countries.sort((a, b) => b.TotalDeaths - a.TotalDeaths),
        loading: false,
      };
    case FAILED_REQUEST:
      return { ...state, error };
    default:
      return state;
  }
}
export default covidDataSummary;
