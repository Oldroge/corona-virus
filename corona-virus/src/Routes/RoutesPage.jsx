import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Route, Routes } from 'react-router-dom';
import RankPage from '../Pages/Rank/RankPage';
import ByCountry from '../Pages/ByCountry/ByCountry';

function RoutesPage({ datasCovid }) {
  return (
    <Routes>
      <Route element={<RankPage />} path="/" exact />
      <Route element={<ByCountry datasCovid={datasCovid} />} path="/details/:country" exact />
    </Routes>
  );
}

const mapStateToProps = (state) => ({
  datasCovid: state.covidDataSummary.countriesList,
});

RoutesPage.propTypes = ({
  datasCovid: PropTypes.object,
}).isRequired;

export default connect(mapStateToProps)(RoutesPage);
