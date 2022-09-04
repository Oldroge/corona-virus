import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Search from '../Commons/Search/Search';

import './Header.css';

import VirusIcon from './images/corona.png';
import CovidIcon from './images/covid_img.png';

function Header({ datasCovid }) {
  return (
    <header id="header">
      <div className="header-container">
        <div className="header-icon-dropdown-container">
          <div>
            <img
              src={VirusIcon}
              alt="White background with virus drawing painted orange"
              className="virus-image"
            />
          </div>
          <Search datasCovid={datasCovid} />
        </div>
        <div>
          <img
            src={CovidIcon}
            alt="White backgroud writed covid-19 and letter O drawing as a red virus"
            className="covid19-image"
          />
        </div>
        <nav className="nav-container">
          <ul className="nav-pages-header">
            <li className="nav-links">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-links">
              <Link to="/details/US" className="nav-links">
                By Country
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => ({
  datasCovid: state.covidDataSummary.countriesList,
});

Header.propTypes = ({
  datasCovid: PropTypes.object,
}).isRequred;

export default connect(mapStateToProps)(Header);
