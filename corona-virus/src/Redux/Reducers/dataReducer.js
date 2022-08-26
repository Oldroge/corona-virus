import { GET_COVID_DATA, FAILED_REQUEST, REQUEST_DATA } from '../Actions/fetchAction';

const INITIAL_STATE = {
  covidData: {},
  error: '',
};

function covidDataSummary(state = INITIAL_STATE, { type, payload, error } = {}) {
  switch (type) {
    case REQUEST_DATA:
      return { ...state };
    case GET_COVID_DATA:
      return { ...state, covidData: payload };
    case FAILED_REQUEST:
      return { ...state, error };
    default:
      return state;
  }
}

export default covidDataSummary;
