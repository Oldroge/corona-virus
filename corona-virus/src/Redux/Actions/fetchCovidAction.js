const REQUEST_DATA = 'REQUEST_DATA';
const GET_COVID_DATA = 'GET_COVID_DATA';
const FAILED_REQUEST = 'FAILED_REQUEST';

const REQUEST_DATA_BY_COUNTRY = 'REQUEST_DATA_BY_COUNTRY';
const GET_COVID_DATA_BY_COUNTRY = 'GET_COVID_DATA_BY_COUNTRY';
const FAILED_REQUEST_BY_COUNTRY = 'FAILED_REQUEST_BY_COUNTRY';

const requestData = () => ({
  type: REQUEST_DATA,
});

const getCovidData = (json) => ({
  type: GET_COVID_DATA,
  countries: json.Countries,
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

const requestDataByCountry = () => ({
  type: REQUEST_DATA_BY_COUNTRY,
});

const getCovidDataByCountry = (json) => ({
  type: GET_COVID_DATA_BY_COUNTRY,
  byCountries: json,
});

const failedCovidRequestByCountry = (error) => ({
  type: FAILED_REQUEST_BY_COUNTRY,
  error: error.message,
});

const fetchCovidByCountry = (country) => async (dispatch) => {
  dispatch(requestDataByCountry());

  if (country === undefined) {
    return;
  }

  try {
    const response = await fetch(`https://api.covid19api.com/total/country/${country}`);
    const json = await response.json();
    dispatch(getCovidDataByCountry(json));
  } catch (error) {
    dispatch(failedCovidRequestByCountry(error));
  }
};

export {
  fetchCovidSummary,
  fetchCovidByCountry,
  GET_COVID_DATA,
  FAILED_REQUEST,
  REQUEST_DATA,
  REQUEST_DATA_BY_COUNTRY,
  GET_COVID_DATA_BY_COUNTRY,
  FAILED_REQUEST_BY_COUNTRY,
};
