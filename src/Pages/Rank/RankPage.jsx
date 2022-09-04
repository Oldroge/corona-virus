import React from 'react';

import Header from '../../Components/Header/Header';
import RankCoutries from '../../Components/RankCoutries/RankCoutries';
import Footer from '../../Components/Footer/Footer';

import './RankPage.css';

export default function RankPage() {
  return (
    <>
      <Header />
      <h1 className="rank-page-title">Ranking by countries</h1>
      <RankCoutries />
      <Footer />
    </>
  );
}
