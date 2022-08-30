import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

// import Loading from '../Loading/Loading';

import './Flag.css';

function Flag({ countriesData }) {
  return (
    <div>
      {
        countriesData ? (
          <>
            <img
              src={countriesData.flag}
              alt={`flag from ${countriesData.name}`}
              className="country-flag-img"
            />
            <h2 className="coutry-name-title">{countriesData.name}</h2>
          </>
        ) : null
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  countriesData: state.dataCountriesReducer.countries,
});

Flag.propTypes = ({
  countriesData: PropTypes.array,
}).isRequired;
export default connect(mapStateToProps)(Flag);
