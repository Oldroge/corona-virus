import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Loading from '../Loading/Loading';

import './Flag.css';

function Flag({ countriesData, isLoading }) {
  return (
    <div>
      {
        isLoading ? (
          <Loading />
        ) : (
          <>
            <img
              src={countriesData.flag}
              alt={`flag from ${countriesData.name}`}
              className="country-flag-img"
            />
            <h2 className="coutry-name-title">{countriesData.name}</h2>
          </>
        )
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  countriesData: state.dataCountriesReducer.countries,
  isLoading: state.dataCountriesReducer.loading,
});

Flag.propTypes = ({
  countriesData: PropTypes.array,
  isLoading: PropTypes.bool,
}).isRequired;
export default connect(mapStateToProps)(Flag);
