const REQUEST_DATA = 'REQUEST_DATA';
const GET_COVID_DATA = 'GET_COVID_DATA';
const FAILED_REQUEST = 'FAILED_REQUEST';

const requestData = () => ({
  type: REQUEST_DATA,
});

const getCovidData = (json) => ({
  type: GET_COVID_DATA,
  payload: json,
});

const failedCovidRequest = (error) => ({
  type: FAILED_REQUEST,
  error: error.message,
});

const fetchCovidSummary = () => async (dispatch) => {
  dispatch(requestData());
  try {
    const response = await fetch('https://api.covid19api.com/summary');
    const json = await response.json();
    dispatch(getCovidData(json));
  } catch (error) {
    dispatch(failedCovidRequest(error));
  }
};

export {
  fetchCovidSummary,
  GET_COVID_DATA,
  FAILED_REQUEST,
  REQUEST_DATA,
};
