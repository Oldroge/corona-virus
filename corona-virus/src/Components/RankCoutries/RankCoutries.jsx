import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loading from '../Loading/Loading';

import './RankCoutries.css';

import { fetchCovidSummary } from '../../Redux/Actions/fetchAction';

function RankCoutries({ fetchSummary, covidData, loading }) {
  useEffect(() => {
    fetchSummary();
  }, []);
  return (
    <section id="rank-countries-container">
      {loading ? (
        <Loading />
      ) : (
        <table className="rank-table-container">
          <thead>
            <tr>
              <th className="thead-text">Position</th>
              <th className="thead-text">Countries</th>
              <th className="thead-text">Deaths</th>
            </tr>
          </thead>
          {covidData
            .sort((a, b) => b.TotalDeaths - a.TotalDeaths)
            .map((datas, index) => (
              <tbody key={datas.Country}>
                <tr className="tbody-text">
                  <td>
                    {index + 1}
                    º
                  </td>
                  <td>{datas.Country}</td>
                  <td>{datas.TotalDeaths.toLocaleString('pt-BR')}</td>
                  <td className="tbody-text-detail">Details</td>
                </tr>
              </tbody>
            ))}
        </table>
      )}
    </section>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchSummary: () => dispatch(fetchCovidSummary()),
});

const mapStateToProps = (state) => ({
  covidData: state.covidDataSummary.countriesList,
  loading: state.covidDataSummary.loading,
});

RankCoutries.propTypes = {
  fetchSummary: PropTypes.func,
  covidData: PropTypes.object,
  loading: PropTypes.bool,
}.isRequired;
export default connect(mapStateToProps, mapDispatchToProps)(RankCoutries);
