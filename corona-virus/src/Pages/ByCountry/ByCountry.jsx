import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';

import Header from '../../Components/Header/Header';
import Flag from '../../Components/Commons/Flag/Flag';
import CounterData from '../../Components/Commons/CounterData/CounterData';

function ByCountry({ CovidDatas, CountryDatas, isLoading }) {
  return (
    <>
      <Header />
      <section>
        {
          isLoading ? 'loading' : (
            <>
              <CounterData
                title="Population"
                numbers={
                CountryDatas.population
                  ? CountryDatas.population.toLocaleString('pt-BR') : null
              }
              />
              <Flag />

              {
                CovidDatas.map((covidDatas) => (
                  covidDatas.CountryCode === CountryDatas.alpha2Code ? (
                    <section>
                      <CounterData title="Confirmed" numbers={covidDatas.TotalConfirmed} />
                      <CounterData title="Last Deaths" numbers={covidDatas.NewDeaths} />
                      <CounterData title="Deaths" numbers={covidDatas.TotalDeaths} />
                    </section>
                  ) : null
                ))
              }
            </>
          )
        }
      </section>
    </>
  );
}

ByCountry.propTypes = ({
  CountryDatas: PropType.object,
  CovidDatas: PropType.object,
  isLoading: PropType.bool,
}).isRequired;

const mapStateToProps = (state) => ({
  CountryDatas: state.dataCountriesReducer.countries,
  CovidDatas: state.covidDataSummary.countriesList,
  isLoading: state.dataCountriesReducer.loading,
});

export default connect(mapStateToProps)(ByCountry);
