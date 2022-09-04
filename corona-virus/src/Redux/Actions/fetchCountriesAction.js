const REQUEST_DATA = 'REQUEST_DATA';
const GET_DATA = 'GET_DATA';
const FAILED_REQUEST = 'FAILED_REQUEST';

const requestData = () => ({
  type: REQUEST_DATA,
});

const getCountriesData = (countriesData) => ({
  type: GET_DATA,
  countriesData,
});

const getFailed = (error) => ({
  type: FAILED_REQUEST,
  error,
});

const fetchCountriesData = (parameter) => async (dispatch) => {
  dispatch(requestData());

  if (parameter === undefined) {
    return;
  }

  try {
    const response = await fetch(`https://restcountries.com/v2/alpha/${parameter}`);
    const json = await response.json();
    dispatch(getCountriesData(json));
  } catch (erro) {
    getFailed(erro);
  }
};

export {
  REQUEST_DATA,
  GET_DATA,
  FAILED_REQUEST,
  fetchCountriesData,
};
