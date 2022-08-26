import React from 'react';

import Header from '../../Components/Header/Header';
import RankCoutries from '../../Components/RankCoutries/RankCoutries';

export default function RankPage() {
  return (
    <>
      <Header />
      <h1>Ranking by countries</h1>
      <RankCoutries />
    </>
  );
}
