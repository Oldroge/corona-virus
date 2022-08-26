import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchCovidSummary } from '../../Redux/Actions/fetchAction';

import Header from '../../Components/Header/Header';

function RankPage({ fetchSummary, covidData }) {
  console.log(covidData);
  return (
    <>
      <Header />
      <h1>Ranking by countries</h1>
      <button type="button" onClick={fetchSummary}>Test</button>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchSummary: () => dispatch(fetchCovidSummary()),
});

const mapStateToProps = (state) => ({
  covidData: state.covidDataSummary.covidData,
});

RankPage.propTypes = ({
  fetchSummary: PropTypes.func,
  covidData: PropTypes.object,
}).isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(RankPage);
