import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import ReserchIcon from './images/research.gif';
import { fetchCovidSummary } from '../../../Redux/Actions/fetchCovidAction';
import { fetchCountriesData } from '../../../Redux/Actions/fetchCountriesAction';

import './Search.css';

function Search({
  fetchSummary, fetchCountries, datasCovid,
}) {
  const location = useLocation();
  const { country } = useParams();

  const [clicked, setClicked] = useState(false);
  const [countryCode, setCountryCode] = useState('');

  useEffect(() => {
    fetchSummary();
    fetchCountries(countryCode);
  }, [countryCode]);

  const wasClicked = (event) => {
    if (event === 'click') {
      setClicked(true);
    }

    if (clicked === true) {
      setClicked(false);
    }
  };

  return (
    <>
      {location.pathname === `/details/${country}` && clicked === false ? (
        <img
          src={ReserchIcon}
          alt="White background with a animated magnifying glass clickable"
          className="research-gif"
          onClick={({ type }) => wasClicked(type)}
          aria-hidden="true"
        />
      ) : null}

      {clicked ? (
        <label htmlFor="countries">
          <select
            name="countries"
            id="countries"
            onChange={({ target }) => setCountryCode(target.value)}
          >
            <option> </option>
            {
              datasCovid.map((countriesData) => (
                <option
                  value={countriesData.CountryCode}
                  key={countriesData.CountryCode}
                >
                  {countriesData.Country}
                </option>
              ))
            }
          </select>
        </label>
      ) : null}

      {
        location.pathname === `/details/${country}` ? (
          <label htmlFor="countries">
            <select
              name="countries"
              className="countries-desktop"
              onChange={({ target }) => setCountryCode(target.value)}
            >
              <option value="" disabled defaultValue="Select country...">Select country...</option>
              {
                  datasCovid.map((countriesData) => (
                    <option
                      value={countriesData.CountryCode}
                      key={countriesData.CountryCode}
                    >
                      {countriesData.Country}
                    </option>
                  ))
              }
            </select>
          </label>
        ) : null
      }
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchSummary: () => dispatch(fetchCovidSummary()),
  fetchCountries: (countryCode) => dispatch(fetchCountriesData(countryCode)),
});

const mapStateToProps = (state) => ({
  countryData: state.covidDataSummary.countriesList,
});

Search.propTypes = ({
  fetchSummary: PropTypes.func,
  fetchCountries: PropTypes.func,
}).isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Search);
