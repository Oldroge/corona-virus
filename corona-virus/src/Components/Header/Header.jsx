import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.css';

import VirusIcon from './images/corona.png';
import CovidIcon from './images/covid_img.png';
import ReserchIcon from './images/research.gif';

export default function Header() {
  const location = useLocation();

  return (
    <header id="header">
      <div className="header-container">
        <div>
          <img
            src={VirusIcon}
            alt="White background with virus drawing painted orange"
            className="virus-image"
          />
        </div>
        <div>
          {
            location.pathname === '/details' ? (
              <img
                src={ReserchIcon}
                alt="White background with a animated magnifying glass clickable"
                className="research-gif"
              />
            ) : null
          }
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
              <Link to="/details" className="nav-links">
                By Country
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
