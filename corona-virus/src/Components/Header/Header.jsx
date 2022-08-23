import React from 'react';

import './Header.css';

import VirusIcon from './images/corona.png';
import CovidIcon from './images/covid_img.png';

export default function Header() {
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
          <img
            src={CovidIcon}
            alt="White backgroud writed covid-19 and letter O drawing as a red virus"
            className="covid19-image"
          />
        </div>
        <nav className="nav-container">
          <ul className="nav-pages-header">
            <li className="nav-links">Home</li>
            <li className="nav-links">By Country</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
