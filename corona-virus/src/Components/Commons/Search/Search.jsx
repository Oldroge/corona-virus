import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import ReserchIcon from './images/research.gif';
import { fetchCovidSummary } from '../../../Redux/Actions/fetchAction';

import './Search.css';

function Search({ fetchSummary, countryData }) {
  const [clicked, setClicked] = useState(false);

  const location = useLocation();

  useEffect(() => {
    fetchSummary();
  }, []);

  const wasClicked = (event) => {
    if (event === 'click') {
      setClicked(true);
    }

    if (clicked === true) {
      setClicked(false);
    }
  };

  return (
    <div>
      {location.pathname === '/details' && clicked === false ? (
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
          <select name="countries" id="countries">
            <option> </option>
            {
              countryData.map((countriesData) => (
                <option
                  value={countriesData.CountryCode}
                  key={countriesData.CountryCode}
                >
                  {countriesData.Country}
                </option>
              )).sort()
            }
          </select>
        </label>
      ) : null}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchSummary: () => dispatch(fetchCovidSummary()),
});

const mapStateToProps = (state) => ({
  countryData: state.covidDataSummary.countriesList,
});

Search.propTypes = ({
  fetchSummary: PropTypes.func,
}).isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Search);
