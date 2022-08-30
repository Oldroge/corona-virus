import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

function Flag({ countriesData }) {
  return (
    <div>
      {
        countriesData ? (
          <img src={countriesData.flag} alt="" />
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
