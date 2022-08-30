import React, { useEffect } from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';

import Header from '../../Components/Header/Header';
import Flag from '../../Components/Commons/Flag/Flag';
import CounterData from '../../Components/Commons/CounterData/CounterData';
import { fetchCovidByCountry } from '../../Redux/Actions/fetchCovidAction';
import Loading from '../../Components/Commons/Loading/Loading';

import './ByCountry.css';

function ByCountry({
  CovidDatas,
  CountryDatas,
  isLoading,
  fetchByCountry,
}) {
  useEffect(() => {
    fetchByCountry(CountryDatas.alpha2Code);
  }, [CountryDatas]);

  return (
    <>
      <Header />
      <section className="by-country-container">
        {
          isLoading ? <Loading /> : (
            <>
              <div className="flag-population-container">
                <CounterData
                  title="Population"
                  numbers={
                CountryDatas.population
                  ? CountryDatas.population.toLocaleString('pt-BR') : null
              }
                />
                <Flag />
              </div>
              <div className="cards-datas-numbers">
                <CounterData
                  title="Confirmed"
                  numbers={
                    CovidDatas[CovidDatas.length - 1]
                      ? CovidDatas[CovidDatas.length - 1].Confirmed.toLocaleString('pt-BR')
                      : null
                  }
                />

                <CounterData
                  title="Actives"
                  numbers={
                    CovidDatas[CovidDatas.length - 1]
                      ? CovidDatas[CovidDatas.length - 1].Active.toLocaleString('pt-BR')
                      : null
                  }
                />

                <CounterData
                  title="Deaths"
                  numbers={
                    CovidDatas[CovidDatas.length - 1]
                      ? CovidDatas[CovidDatas.length - 1].Deaths.toLocaleString('pt-BR')
                      : null
                  }
                />

              </div>
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
  fetchByCountry: PropType.func,
}).isRequired;

const mapStateToProps = (state) => ({
  CountryDatas: state.dataCountriesReducer.countries,
  CovidDatas: state.covidDataByCountry.byCountries,
  isLoading: state.dataCountriesReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchByCountry: (datas) => dispatch(fetchCovidByCountry(datas)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ByCountry);
